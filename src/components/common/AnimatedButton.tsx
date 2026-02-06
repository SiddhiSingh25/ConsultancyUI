const AnimatedButton = ({
  title,
  type = "button",
  disabled = false,
}: {
  title: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="
        group relative inline-flex items-center
        overflow-hidden rounded-full
        disabled:opacity-60
      "
    >
      {/* Base background */}
      <span className="absolute inset-0 bg-primary-900" />

      {/* Hover overlay (FIXED) */}
      <span
        className="
          absolute inset-0 bg-secondary-600
          translate-x-[-100%]
          group-hover:translate-x-0
          transition-transform duration-300 ease-out
          will-change-transform
          pointer-events-none
        "
      />

      {/* Content */}
      <span
        className="
          relative z-10 flex items-center
          px-5 py-3
          text-white font-medium
          whitespace-nowrap
        "
      >
        <span className="min-w-[88px] text-center">
          {title}
        </span>
      </span>
    </button>
  );
};

export default AnimatedButton;