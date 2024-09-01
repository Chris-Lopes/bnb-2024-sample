import { FunctionComponent } from 'react';
const Hero:FunctionComponent = () => {
  	return (
      <div
        className="w-full relative h-screen bg-cover bg-no-repeat bg-[top]"
        style={{ backgroundImage: 'url("/actualBg.png")' }}>
        <img
          className="absolute h-[52.42%] w-[53.47%] top-[31.22%] right-[0%] bottom-[16.37%] left-[46.53%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/bg gaurds.png"
        />
        <img
          className="absolute top-[6rem] left-[15.25rem] w-[59.438rem] h-[16.125rem] object-cover"
          alt=""
          src="/bnb logo.png"
        />
        <img
          className="absolute top-[14.063rem] left-[13.063rem] w-[22.813rem] h-[47.5rem]"
          alt=""
          src="/geometry.svg"
        />
      </div>
    );
};

export default Hero;
