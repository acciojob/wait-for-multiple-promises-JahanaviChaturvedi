//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  const loadingRow = document.createElement("tr");
  const loadingCell = document.createElement("td");
  loadingCell.textContent = "Loading...";
  loadingCell.colSpan = 2;
  loadingRow.appendChild(loadingCell);
  output.appendChild(loadingRow);

  function createPromise(name) {
    return new Promise((resolve) => {
      const time = (Math.random() * 2 + 1).toFixed(3); 
      setTimeout(() => resolve({ name, time }), time * 1000);
    });
  }

  const promises = [
    createPromise("Promise 1"),
    createPromise("Promise 2"),
    createPromise("Promise 3"),
  ];

  Promise.all(promises).then((results) => {
    output.innerHTML = "";

    let maxTime = 0; 

    results.forEach((result) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const timeCell = document.createElement("td");

      nameCell.textContent = result.name;
      timeCell.textContent = result.time;

      row.appendChild(nameCell);
      row.appendChild(timeCell);
      output.appendChild(row);

      maxTime = Math.max(maxTime, parseFloat(result.time));
    });

    const totalRow = document.createElement("tr");
    const totalNameCell = document.createElement("td");
    const totalTimeCell = document.createElement("td");

    totalNameCell.textContent = "Total";
    totalTimeCell.textContent = maxTime.toFixed(3);

    totalRow.appendChild(totalNameCell);
    totalRow.appendChild(totalTimeCell);
    output.appendChild(totalRow);
  });
});