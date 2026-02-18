export async function getBotResponse(message: string) {
  const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: message }),
  });

  const data = await response.json();

  // The model returns an array of text
  if (Array.isArray(data) && data[0]?.generated_text) {
    return data[0].generated_text;
  }

  return "Sorry, I couldn't understand that.";
}
