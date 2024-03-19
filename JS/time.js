function updateClock() {
  var now = new Date();
  document.getElementById("datetime").innerHTML = now.toLocaleString();
  // 使用 requestAnimationFrame 递归调用，以保证每次重绘前都更新时钟
  requestAnimationFrame(updateClock);
}

// 页面加载时立即更新时钟
updateClock()