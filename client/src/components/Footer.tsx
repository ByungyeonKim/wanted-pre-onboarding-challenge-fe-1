export const Footer = () => {
  return (
    <footer className='bg-gray-100'>
      <div className='md:space-y-6 flex flex-col justify-center items-center max-w-md mx-auto space-y-4 p-4'>
        <nav>
          <ul className='text-sm flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12'>
            <li>
              <a title='About 빈츠' className='text-gray-400' href='/'>
                About
              </a>
            </li>
            <li>
              <a title='프로젝트 목록' href='/' className='text-gray-400'>
                Projects
              </a>
            </li>
            <li>
              <a
                title='개발 전용차선 블로그'
                href='https://onlydev.tistory.com/'
                rel='noopener noreferrer'
                target='_blank'
                className='text-gray-400'>
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <p className='text-center text-sm text-gray-500 lg:text-right'>
          Copyright 2023. Vintz All rights reserved.
        </p>
      </div>
    </footer>
  );
};
