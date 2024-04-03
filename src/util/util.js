

/**
 * 在这个函数中，lat1 和 lon1 是第一个点的纬度和经度，lat2 和 lon2 是第二个点的纬度和经度。
 *函数首先将这些度数转换为弧度，然后使用Haversine公式计算两点之间的角度差，最后将这个角度差转换为距离。这个距离的单位是千米。
 * @param {*} lat1  纬度1
 * @param {*} lon1  经度1
 * @param {*} lat2  纬度2
 * @param {*} lon2  经度1
 * @return {*} 
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // 地球半径，单位：千米  
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below  
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km  
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

export default {
    calculateDistance
}
