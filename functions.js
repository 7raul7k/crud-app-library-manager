function attachHomePage() {
  let container = document.querySelector(".container");

  container.innerHTML = `
    <h1>Books</h1>
	<p><a class="button" href="new_book.html">Create New Book</a></p>
	<table>
		<thead>
			<tr>
				<th>Title</th>
				<th>Author</th>
				<th>Genre</th>
				<th>Year</th>
			</tr>
		</thead>
		<tbody class="books-container">
			<tr>
				<td>
					<a href="book_detail.html">The Hunger Games</a>
				</td>
				<td>Suzanne Collins</td>
				<td>Fantasy</td>
				<td>2008</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">Catching Fire</a>
				</td>
				<td>Suzanne Collins</td>
				<td>Fantasy</td>
				<td>2009</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">Mockingjay</a>
				</td>
				<td>Suzanne Collins</td>
				<td>Fantasy</td>
				<td>2010</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">The Ballad of Songbirds and Snakes</a>
				</td>
				<td>Suzanne Collins</td>
				<td>Fantasy</td>
				<td>2020</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">The Memory Police</a>
				</td>
				<td>Yoko Ogawa</td>
				<td>Science Fiction</td>
				<td>1994</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">Nickel Boys</a>
				</td>
				<td>Colson Whitehead</td>
				<td>Historical Fiction</td>
				<td>2019</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">The Book of Unknown Americans</a>
				</td>
				<td>Cristina Henriquez</td>
				<td>Fiction</td>
				<td>2014</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">A Brief History of Time</a>
				</td>
				<td>Stephen Hawking</td>
				<td>Non Fiction</td>
				<td>1988</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">Armada</a>
				</td>
				<td>Ernest Cline</td>
				<td>Science Fiction</td>
				<td>2015</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">Emma</a>
				</td>
				<td>Jane Austen</td>
				<td>Classic</td>
				<td>1815</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">Frankenstein</a>
				</td>
				<td>Mary Shelley</td>
				<td>Horror</td>
				<td>1818</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">Pride and Prejudice</a>
				</td>
				<td>Jane Austen</td>
				<td>Classic</td>
				<td>1813</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">Ready Player One</a>
				</td>
				<td>Ernest Cline</td>
				<td>Science Fiction</td>
				<td>2011</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">The Martian</a>
				</td>
				<td>Andy Weir</td>
				<td>Science Fiction</td>
				<td>2014</td>
			</tr>
			<tr>
				<td>
					<a href="book_detail.html">The Universe in a Nutshell</a>
				</td>
				<td>Stephen Hawking</td>
				<td>Non Fiction</td>
				<td>2001</td>
			</tr>
		</tbody>
	</table>
    
    
    
    
    
    
    
    
    
    
    
    
    
    `;
    attachRows(books);
}

function attachRows(arr){


    let tableBody=document.querySelector(".books-container");


    tableBody.innerHTML="";

    let text="";

    arr.forEach(element => {

        text+=createRow(element)
        
    });


    tableBody.innerHTML=text;


}


function createRow(book) {
  return `

            <tr>
				<td>
					${book.title}
				</td>
				<td>${book.author}</td>
				<td>${book.genre}</td>
				<td>${book.year}</td>
			</tr>

`;
}