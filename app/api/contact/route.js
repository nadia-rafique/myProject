import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    // ✅ Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // ✅ Send to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY, // from .env
        name,
        email,
        message: `Portfolio Contact from ${name} (${email}): ${message}`,
        to: "nadiarafique1441@gmail.com", // your Gmail
        subject: `Portfolio Contact: Message from ${name}`,
        from_name: "Portfolio Website",
        replyto: email,
      }),
    })

    const result = await response.json()

    if (response.ok && result.success) {
      return NextResponse.json(
        { message: "Message sent successfully! I'll get back to you soon." },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: result.message || "Failed to send message. Try again later." },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Unexpected error. Please email me directly at nadiarafique1441@gmail.com" },
      { status: 500 }
    )
  }
}
