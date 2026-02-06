import Link from 'next/link'


const Button = ({href, title}) => {
  return (
    <Link
      href={`${href}`}
      className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-secondary-500 to-secondary-300 py-3 px-8 rounded-full text-white hover:-translate-y-0.5 transition"
    >
      <span>{title}</span>
      <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
        <path
          d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
          fill="#fff"
        />
      </svg>
    </Link>
  );
};

export default Button;
