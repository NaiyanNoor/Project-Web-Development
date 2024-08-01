class Attendance {
    constructor() {
        this.records = [];
    }

    markAttendance(name, date) {
        const record = {
            name,
            date,
            status: 'Present'
        };
        this.records.push(record);
        this.updateTable();
    }

    updateTable() {
        const tbody = document.getElementById('records-tbody');
        tbody.innerHTML = '';
        this.records.forEach(record => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${record.name}</td>
                <td>${record.date}</td>
                <td>${record.status}</td>
            `;
            tbody.appendChild(row);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const attendance = new Attendance();

    document.getElementById('attendance-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const date = e.target.date.value;
        attendance.markAttendance(name, date);
        e.target.reset();
    });
});
