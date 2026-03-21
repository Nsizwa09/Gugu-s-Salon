document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userSurname').value;
    const style = document.getElementById('style').value;
    const successNote = document.getElementById('successNote');

    const myNumber = "27782996745";

    const message = `Hello! I'd like to book an appointment.%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Surname:* ${phone}%0A` +
                    `*Style:* ${style}`;

    const whatsappUrl = `https://wa.me/${myNumber}?text=${message}`;

    successNote.style.display = 'block';

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
        this.reset();
        successNote.style.display = 'none';
    }, 5000);
});