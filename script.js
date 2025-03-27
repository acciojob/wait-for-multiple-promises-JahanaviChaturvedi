//your JS code here. If required.
const output = document.getElementById("output");
output.innerHTML = `<tr id="loading"><td colspan="2">Loading...</td></tr>`;
const randomDelay = () => Math.floor(Math.random() * 2000) + 1000; 
const promises = [1, 2, 3].map((num) =>
  new Promise((resolve) => {
    const delay = randomDelay();
    setTimeout(() => resolve({ name: `Promise ${num}`, time: (delay / 1000).toFixed(3) }), delay);
  })
);
Promise.all(promises).then((results) => {
  output.innerHTML = ""; 

  results.forEach(({ name, time }) => {
    const row = `<tr><td>${name}</td><td>${time}</td></tr>`;
    output.innerHTML += row;
  });
  const total = Math.max(...results.map((res) => parseFloat(res.time))).toFixed(3);
  output.innerHTML += `<tr><td>Total</td><td>${total}</td></tr>`;
});
