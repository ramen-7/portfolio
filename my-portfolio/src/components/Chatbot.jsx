export default function Chatbot() {
  return (
    <section className="relative max-w-3xl mx-auto h-[30vh] border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900">
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 z-10 bg-white/10 dark:bg-black/10 backdrop-blur-sm flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">A Virtual Shivam is Coming Soon</h2>
        <p className="text-sm text-gray-900 dark:text-gray-300">I’m learning everything about me. Check back soon 🤖</p>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Example Messages */}
          <div className="text-left max-w-xs bg-gray-200 dark:bg-gray-700 rounded-lg p-3 text-sm">
            Hi there! How can I help you today?
          </div>
          <div className="text-right max-w-xs ml-auto bg-blue-500 text-white rounded-lg p-3 text-sm">
            Tell me about Shivam’s experience.
          </div>
        </div>

        {/* Input Bar */}
        <div className="border-t p-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 text-sm rounded border bg-gray-100 dark:bg-gray-800 dark:text-white"
            disabled
          />
        </div>
      </div>
    </section>
  );
}
