//实时监听当前浏览器宽度组件
import React, { useState, useEffect } from 'react';
const BrowserWidthListener = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div>当前浏览器宽度：{width}px</div>;
};

export default BrowserWidthListener;

// 下面是使用例子
// import React from 'react';
// import BrowserWidthListener from './BrowserWidthListener';

// const App = () => {
//   return (
//     <div>
//       <h1>我的应用</h1>
//       <BrowserWidthListener />
//     </div>
//   );
// };

// export default App;
