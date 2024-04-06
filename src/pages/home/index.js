
/* eslint-disable react/react-in-jsx-scope */
// home.js
import './index.css';

function Home() {

    // 模拟后端返回数据
    let item = {
        targetName: '低',
        viewMod: '场景', // 或者 '区域'
        thresholdValue: '2,4,6,8',
        tatgetAlgo: ''
    };

    // 模拟逻辑
    if (item.targetName == '无') {
        item.tatgetAlgo = '根满分';
    } else if (item.targetName == '弱') {
        if (item.viewMod.indexOf('场景') > -1) {
            let arr = item.thresholdValue.split(',', 7);
            item.tatgetAlgo = `以下 ${arr[0]} % ；`;
        } else if (item.viewMod.indexOf('区域') > -1) {
            let arr = item.thresholdValue.split(',', 3);
            item.tatgetAlgo = `1、问题 ${arr[0]} ；`;
        }
    } else if (item.targetName == '低') {
        if (item.viewMod.indexOf('场景') > -1) {
            let arr = item.thresholdValue.split(',', 4);
            item.tatgetAlgo = `以下 ${arr[3]}G；`;
        } else if (item.viewMod.indexOf('区域') > -1) {
            let arr = item.thresholdValue.split(',', 2);
            item.tatgetAlgo = `1、问题得分`;
        }
    }

    return (
        <div className='Home Home-pagination'>主页面</div>
    )
}
export default Home;



