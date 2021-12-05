var url = 'https://breakingbadapi.com/api/quote/random';
function getData() {
	fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((result) => result.json())
		.then((data) => {
			console.log(data);
			data.map((i) => {
				console.log(i.name);
				document.getElementById('child1').innerText = '';
				document.getElementById('child1').innerText +=
					'Quote Id' + i.quote_id + '\n' + 'Quote' + i.quote + '\n' + "Author" + i.author + "\n" + "Series" + i.series + "\n";
			});
			// document.getElementById('parent').innerText = ;
		})
		.catch((err) => {
			console.log(err);
		});
}
function createData() {
	let data = {
		name: document.getElementById('name').value,
		createdAt: '10/9/1999',
		Avatar: 'avatar',
	};

	fetch(document.getElementById('url').value, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((result) => result.json())
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
}

function updateData() {
	let data = {
		name: 'Arul',
		email: 'arul@gmail.com',
	};

	fetch(url + '/1', {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((result) => result.json())
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
}

function deleteData() {
	fetch(url + '/2', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((result) => result.json())
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
}

// getData();
// createData();
