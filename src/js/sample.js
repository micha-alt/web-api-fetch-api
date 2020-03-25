
const meeting = document.getElementById('meeting');
const attendeesTable = document.querySelector('article.sample tbody');

fetch('/meetings/1?_embed=attendees')
  .then(response => response.json())
  .then(({ id, title, attendees }) => {
    meeting.dataset['id'] = id;
    meeting.querySelector('span').textContent = title;
    attendees.forEach(elt => {
      attendeesTable.insertAdjacentHTML('beforeend',
        `<tr>
          <td>${elt.id}</td>
          <td>${elt.name}</td>
          <td>${elt.email}</td>
        </tr>`
      )
    });
  });
