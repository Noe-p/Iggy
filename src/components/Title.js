export function Title({ children, anchor }) {
  return (
    <div id={anchor} className='py-6 bg-white'>
      <div className='px-4 mx-auto max-w-screen-2xl md:px-8'>
        <h2
          className='mb-4 text-2xl font-bold text-gray-800 lg:text-5xl md:mb-6 font-gilroy'
          id='funcs'
        >
          {children}
        </h2>
      </div>
    </div>
  );
}
