import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  company: string;
  phone: string;
  email?: string;
  product: string;
  quantity: string;
  location: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // Basic server-side validation
    if (!body.name || !body.company || !body.phone || !body.product || !body.quantity || !body.location) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log submission for now (console)
    console.log("📩 New enquiry received:", {
      timestamp: new Date().toISOString(),
      ...body,
    });

    // TODO: Integrate email sending with Resend or Nodemailer
    // Example with Resend:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: "Satguru Paper Website <noreply@satgurpaper.com>",
    //   to: [process.env.CONTACT_EMAIL!],
    //   subject: `New Quote Enquiry from ${body.company}`,
    //   html: `
    //     <h2>New Paper Enquiry</h2>
    //     <table>
    //       <tr><td><strong>Name:</strong></td><td>${body.name}</td></tr>
    //       <tr><td><strong>Company:</strong></td><td>${body.company}</td></tr>
    //       <tr><td><strong>Phone:</strong></td><td>${body.phone}</td></tr>
    //       <tr><td><strong>Email:</strong></td><td>${body.email || "—"}</td></tr>
    //       <tr><td><strong>Product:</strong></td><td>${body.product}</td></tr>
    //       <tr><td><strong>Quantity:</strong></td><td>${body.quantity}</td></tr>
    //       <tr><td><strong>Delivery Location:</strong></td><td>${body.location}</td></tr>
    //       <tr><td><strong>Message:</strong></td><td>${body.message || "—"}</td></tr>
    //     </table>
    //   `,
    // });

    return NextResponse.json(
      { success: true, message: "Enquiry received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
