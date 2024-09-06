document.addEventListener('DOMContentLoaded', () => {
    fetchData(); // Fetch data on page load
});

function fetchData() {
    const timeRange = document.getElementById('time-range').value;

    // Simulate API response for different time windows
    const dummyData = {
        '1_day': {
            totalSales: 1200,
            newCustomers: 10,
            conversionRate: '1.5%',
            salesData: [10, 20, 30, 40, 50, 60],
            categoryDistribution: [40, 30, 20, 10]
        },
        '1_week': {
            totalSales: 5000,
            newCustomers: 45,
            conversionRate: '2.0%',
            salesData: [60, 50, 40, 30, 20, 10],
            categoryDistribution: [30, 40, 20, 10]
        },
        '1_month': {
            totalSales: 15000,
            newCustomers: 100,
            conversionRate: '3.5%',
            salesData: [90, 80, 70, 60, 50, 40],
            categoryDistribution: [20, 30, 40, 10]
        },
        '1_year': {
            totalSales: 50000,
            newCustomers: 500,
            conversionRate: '4.2%',
            salesData: [100, 90, 80, 70, 60, 50],
            categoryDistribution: [10, 20, 40, 30]
        }
    };

    const selectedData = dummyData[timeRange];

    // Update cards
    document.getElementById('total-sales').textContent = `$${selectedData.totalSales}`;
    document.getElementById('new-customers').textContent = selectedData.newCustomers;
    document.getElementById('conversion-rate').textContent = selectedData.conversionRate;

    // Update charts
    updatePieChart(selectedData.categoryDistribution);
    updateLineChart(selectedData.salesData);
}

let pieChart, lineChart;

function updatePieChart(data) {
    const ctx = document.getElementById('sales-pie-chart').getContext('2d');
    if (pieChart) pieChart.destroy();
    pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Category A', 'Category B', 'Category C', 'Category D'],
            datasets: [{
                data: data,
                backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745']
            }]
        }
    });
}

function updateLineChart(data) {
    const ctx = document.getElementById('sales-line-chart').getContext('2d');
    if (lineChart) lineChart.destroy();
    lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales',
                data: data,
                borderColor: '#007bff',
                fill: false
            }]
        }
    });
}
