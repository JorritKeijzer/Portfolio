// // // @ts-nocheck

// // // @ts-ignore
const cursor: any = document.getElementById('cursor');
document.addEventListener('mousemove', function (e) {
  e.stopPropagation();
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});

// Cursor HOVER modified - When hovering an element
var hoverCursor: any = document.getElementById('cursor');
var clickableCursor: any = document.getElementsByClassName('clickableCursor');

for (const element of clickableCursor) {
  element.addEventListener('mouseover', () => {
    hoverCursor.style.height = '80px';
    hoverCursor.style.width = '80px';
    hoverCursor.style.animation = 'cursorAnimation 5s linear infinite';
    hoverCursor.style.background = 'white';
  });
  element.addEventListener('mouseout', () => {
    cursor.style.height = '40px';
    cursor.style.width = '40px';
    cursor.style.animation = 'none';
    cursor.style.border = '2px solid white';
    cursor.style.background = 'none';
  });
}
