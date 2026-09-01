// PLACEHOLDER — Full implementation in Part 2

interface CallPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function CallPopup({ open, onClose }: CallPopupProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md">
        <h2 className="font-heading text-xl font-bold mb-4">AI Counselor Call</h2>
        <p className="text-gray-500 mb-4">This feature will be available in Part 2.</p>
        <button onClick={onClose} className="bg-maroon text-white px-6 py-2 rounded-lg">
          Close
        </button>
      </div>
    </div>
  );
}