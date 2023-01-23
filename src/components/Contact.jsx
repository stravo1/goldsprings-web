import { useState } from "preact/hooks";

export default function Modal() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        Contact
      </button>
      <div
        onClick={() => {
          setVisible(false);
        }}
        class="fixed top-0 left-0 h-screen w-screen z-50 flex items-center justify-center bg-black bg-opacity-75"
        style={visible ? { display: "flex" } : { display: "none" }}
      >
        <div class="bg-orange-100 rounded-lg p-8 md:p-10 text-amber-900">
          <form>
            <h2 class="font-bold text-xl mb-4">Contact Us</h2>
            <div class="mb-4">
              <label class="bloc font-medium mb-2" for="name">
                Name
              </label>
              <input
                class="border border-amber-200 bg-orange-50 p-2 rounded-lg w-full"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block font-medium mb-2" for="email">
                Email
              </label>
              <input
                class="border border-amber-200 bg-orange-50 p-2 rounded-lg w-full"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block font-medium mb-2" for="message">
                Message
              </label>
              <textarea
                class="border border-amber-200 bg-orange-50 p-2 rounded-lg w-full h-32"
                id="message"
                name="message"
                required
              ></textarea>
            </div>
          </form>

          <div class="flex justify-end">
            <button
              onClick={() => {
                setVisible(false);
              }}
              class="bg-amber-900 w-full rounded-lg p-4 text-amber-200 my-4"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
