type ContactEmailData = {
  formData?: Record<string, string>;
  message?: string;
  email?: string;
};

const createMessage = (data: ContactEmailData): string => {
  if (data.message && data.message.trim()) {
    return data.message.trim();
  }

  if (data.formData && Object.keys(data.formData).length > 0) {
    if (data.formData.message && data.formData.message.trim()) {
      return data.formData.message.trim();
    }

    const lines: string[] = [];
    Object.entries(data.formData).forEach(([key, value]) => {
      if (value && value.trim()) {
        const fieldName = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");
        lines.push(`${fieldName}: ${value.trim()}`);
      }
    });

    if (lines.length > 0) {
      return lines.join("\n\n");
    }
  }

  return "A new contact form submission has been received.";
};

const sendContactEmail = async (data: ContactEmailData): Promise<Response> => {
  const message = createMessage(data);
  const fromEmail = data.formData?.email || data.email || "noreply@example.com";

  const apiUrl = import.meta.env.VITE_API_URL;
  const projectId = import.meta.env.VITE_PROJECT_ID;

  if (apiUrl && projectId) {
    try {
      const response = await fetch(`${apiUrl}/emails/projects/${projectId}/sendMail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          fromEmail,
          toEmail: "yonathanalonso5@gmail.com",
          recipientEmail: "yonathanalonso5@gmail.com",
          formData: data.formData,
        }),
      });

      if (response.ok) {
        return response;
      }
    } catch (e) {
      console.warn("Backend API email send failed, falling back to mailto", e);
    }
  }

  // Fallback to mailto link navigation if API is unavailable or returns an error
  const subject = encodeURIComponent(`New Contact Form Inquiry from ${data.formData?.name || fromEmail}`);
  const body = encodeURIComponent(message);
  window.location.href = `mailto:yonathanalonso5@gmail.com?subject=${subject}&body=${body}`;

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

export { sendContactEmail, type ContactEmailData };
