function attachHomePage() {
  let container = document.querySelector(".container");

  container.innerHTML = `
    <h1>Books</h1>
	<p class="button" >Create New Book</p>
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


	let btn=document.querySelector(".button");


	let booksContainer=document.querySelector(".books-container");


	booksContainer.addEventListener("click",(e)=>{

		let obj=e.target;

		if(obj.classList.contains("title")){

	
		 let book = books.find(function(book) {
			return book.title === obj.innerText;
		  });

		  attachUpdatePage(book);

			
			
	}
	
	

		


		
	});



	btn.addEventListener("click",()=>{


		attachNewBookPage();
	});

    attachRows(books);
}

function attachUpdatePage(book){
	let container = document.querySelector(".container");

	container.innerHTML = ` <h1>Update Book</h1>
        <p>
            <label for="title">Title</label>
            <input name="title" class="inpttitle" type="text" id="title" value="${book.title}">
        </p>
        <p>
            <label for="author">Author</label>
            <input name="author" class="inptauthor" type="text" id="author" value="${book.author}">
        </p>
        <p>
            <label for="genre">Genre</label>
            <input name="genre" class="inptgenre" type="text" id="genre" value="${book.genre}">
        </p>
        <p>
            <label for="year">Year</label>
            <input name="year" class="inptyear" type="text" id="year" value="${book.year}">
        </p>
        <p>
            <input class="update-button" type="submit" value="Update Book">
        </p>
 
       <p> <a class=" button cancel-button" >Cancel</a> </p>
        <p><input class="delete-button" type="submit" value="Delete Book"></p>
    `;

	let deleteBook = document.querySelector(".delete-button");

	deleteBook.addEventListener("click",()=>{	

		books = deleteBooks(book.id);

		attachHomePage();
	});

	let update = document.querySelector(".update-button");
 

	let inptTitle = document.querySelector(".inpttitle");

	let inptAuthor = document.querySelector(".inptauthor");

	let inptGenre = document.querySelector(".inptgenre");

	let inptYear = document.querySelector(".inptyear");

	
	update.addEventListener("click",()=>{

		let updateBook={id:book.id,title:inptTitle.value,author:inptAuthor.value,genre:inptGenre.value,year:inptYear.value};

		books[book.id-1] = updateBook;

		attachHomePage();
	});

	let cancel = document.querySelector(".cancel-button");

	cancel.addEventListener("click",()=>{

		attachHomePage();
	});
	
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
				<td class="title">
					${book.title}
				</td>
				<td>${book.author}</td>
				<td>${book.genre}</td>
				<td>${book.year}</td>
			</tr>

`;
}


function attachNewBookPage(){

	let container = document.querySelector(".container");

	let errors=[];

	container.innerHTML=`

		<div class='container-errors'>
		</div>
	
		<h1>New Book</h1>
    <section>
        <p>
            <label for="title">Title</label>
            <input name="title" class="title-inpt" type="text" id="title">
        </p>
        <p>
            <label for="author">Author</label>
            <input name="author" class ="author-inpt" type="text" id="author">
        </p>
        <p>
            <label for="genre">Genre</label>
            <input name="genre" class="genre-inpt" type="text" id="genre">
        </p>
        <p>
            <label for="year">Year</label>
            <input name="year" class="year-inpt" type="text" id="year">
        </p>
		<p class="button" >Create New Book</p>
        <p>
            <a class="button cancel-button"  >Cancel</a>
        </p>
    </section>`;



	let inptTitle=document.querySelector(".title-inpt");
	let btn=document.querySelector(".button");

	let inptAuthor = document.querySelector(".author-inpt");
	let inptGenre = document.querySelector(".genre-inpt");
	let inptYear = document.querySelector(".year-inpt");

	
		btn.addEventListener("click",()=>{

			errors=[];
		let book = {
			title: inptTitle.value,
			author: inptAuthor.value,
			genre: inptGenre.value,
			year: inptYear.value
		  };
		


	    if(inptTitle.value !== "" && inptAuthor.value !== ""){
		books.push(book);

		attachHomePage();
		console.log("Cartea a fost adaugata cu success!");
		}else {
			
			
			for (const property in book) {
			
				 if(book[property]===""){
					errors.push(`${property}: missing!!!`);
				 }
			}
		
			attachErrors(errors);
		}
	});


	let cancel = document.querySelector(".cancel-button");

	cancel.addEventListener("click",()=>{

		attachHomePage();
	});


}


function attachErrors(errors){
	let containerErrors=document.querySelector(".container-errors");
	let text=`
	<ul class="error">`
	errors.forEach(err=>{

		text+=`<li>${err}</li>`;
	})
	text+="</ul>";


	containerErrors.innerHTML=text;
}

function deleteBooks(id){

	let arr=[];
	
	books.forEach((book)=>{

		

		if(book.id !== id){

			arr.push(book);

			
			
		}
		

	});

	return arr;
}

