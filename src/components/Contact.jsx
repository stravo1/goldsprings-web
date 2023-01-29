import { useState } from "preact/hooks";

export default function Modal() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="p-2 text-amber-900">
        <div className="mb-4">
          <label className="block font-medium mb-2" for="name">
            Name *
          </label>
          <input
            className="w-full border border-amber-700 p-2 rounded-lg"
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" for="email">
            Phone Number *
          </label>
          <input
            className="w-full border border-amber-700 focus:border-amber-900 focus:border-0 p-2 rounded-lg"
            type="tel"
            id="tel"
            name="tel"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" for="message">
            Message
          </label>
          <textarea
            className="w-full border border-amber-700 p-2 rounded-lg"
            id="message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <a
          onClick={(e) => {
            if (!(name && number)) {
              alert("Fill in all the details!");
              console.log(name);
              e.preventDefault();
            }
          }}
          href={`mailto:goldspringsofficial@gmail.com?subject=Hello Gold Springs!&body=Hi, I ${name} would like to discuss a few things with you guys! \n${
            message ? `Here's a short description: ${message}.` : ""
          }\n Here's my phone number: ${number}.`}
        >
          <button className="bg-amber-900 w-full lg:w-60 rounded-lg p-4 text-amber-200 my-4 font-bold">
            Send a mail
          </button>
        </a>
      </div>
    </>
  );
}
