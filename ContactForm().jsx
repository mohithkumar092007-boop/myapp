function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 20 }}>
      <input type="text" placeholder="Your name" style={{ display: "block", marginBottom: 10 }} />
      <input type="email" placeholder="Your email" style={{ display: "block", marginBottom: 10 }} />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
