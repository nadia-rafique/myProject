import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    try {
      const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY || "c9e1f7e4-8b5a-4c3d-9e2f-1a6b8c4d7e9f", // Demo key
          name: name,
          email: email,
          message: `Portfolio Contact from ${name} (${email}): ${message}`,
          to: "nadiarafique1441@gmail.com",
          subject: `Portfolio Contact: Message from ${name}`,
          from_name: "Portfolio Website",
          replyto: email,
        }),
      })

      const result = await web3FormsResponse.json()

      if (web3FormsResponse.ok && result.success) {
        console.log("Email sent successfully via Web3Forms:", {
          name,
          email,
          timestamp: new Date().toISOString(),
        })

        return NextResponse.json(
          {
            message: "Message sent successfully! I'll get back to you soon.",
          },
          { status: 200 },
        )
      } else {
        throw new Error(`Web3Forms error: ${result.message || "Unknown error"}`)
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError)

      return NextResponse.json(
        {
          error:
            "Server email failed. Please try the contact form again or email me directly at nadiarafique1441@gmail.com",
          fallback: true,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "Failed to send message. Please email me directly at nadiarafique1441@gmail.com",
      },
      { status: 500 },
    )
  }
}
