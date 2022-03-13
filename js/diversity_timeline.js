google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  var options = {
      tooltip: {isHtml: true},
      legend: 'none',
      timeline: {showRowLabels: false,
                 groupByRowLabel: true}

                 
        };
  

  dataTable.addColumn({ type: 'string', id: 'President' });
  dataTable.addColumn({ type: 'string', id: 'dummy bar label' });
  dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });
  dataTable.addColumn({ type: 'string', role: 'tooltip', 'p': {'html': true}});
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
       [ 'womenintech', null, '#ffffff', createCustomHTMLContent("name", "year", "Text.", "image class", "imageURL"), new Date(1925, 1, 1),  new Date(1925, 1, 2) ],
      //  [ 'womenintech', null, '#695e60', createCustomHTMLContent("Ada Lovelace", "1843", "Women have been programming since before it officially existed. Ada Lovelace: Daughter of Lord Byron, is often credited as the first computer programmer. Her work on Charles Babbage's Analytical Engine, published in 1843, contains notes of the first machine-implemented algorithm. Today, there is an award named after her given to individuals that have excelled in either of two areas: outstanding scientific/technical achievement and/or extraordinary service to the computing community through accomplishments and contributions on behalf of women in computing", "ada_image", "images/Ada_Lovelace.jpg"),  new Date(1843, 1, 1),  new Date(1843, 12, 31) ],
       [ 'womenintech', null, '#695e60', createCustomHTMLContent("The Bletchley Park codebreakers", "1938 - 1945", "While many know the name Alan Turing, approximately 8,000 women worked in Bletchly POark, the central site for British cryptanalysts during World War II. Women made up the majority of Bletchley Park's workforce, most enlisted in the Women's Royal Naval Service, WRNS, nicknamed the Wrens. The Wrens performed a vital role operating the computers used for code-breaking, including the Colossus and Bombe machines. Working around the clock in three 8 hour shifts, they were the beating heart of Bletchley Park.", "bletchley_image", "images/Bletchley_Park.jpg"),  new Date(1938, 1, 1),  new Date(1945, 1, 1) ],    
       [ 'womenintech', null, '#695e60', createCustomHTMLContent("Edith Clarke", "1926", "In 1926, Edith Clarke became the first woman to deliver a paper before the American  Institute of Electrical Engineers. Professor Clarke was also the first female engineer to achieve professional standing in Tau Beta Pi, the largest and oldest engineering fraternity in the country. In 1948, Edith Clarke was elected to be the first woman named a  Fellow of the American Institute of Electrical Engineers.", "edith_image", "images/Edith_Clarke.jpg"),  new Date(1926, 1, 1),  new Date(1926, 12, 31) ],
       [ 'womenintech', null, '#695e60', createCustomHTMLContent("Grace Hopper", "1952", "In 1952, Grace Hopper invented an operational link-loader, which at the time was referred to as a compiler. She later said that 'Nobody believed that,' and that she 'had a running compiler and nobody would touch it. They told me computers could only do arithmetic.' Later in her career, Grace worked on the first commercial computer (UNIVAC) and laid the groundwork for the programming language COBOL.", "grace_image", "images/Grace_Hopper.jpg"),  new Date(1952, 1, 1),  new Date(1952, 12, 31) ],
       [ 'womenintech', null, '#695e60', createCustomHTMLContent("Evelyn Boyd Granville", "1956", "The second African-American woman to earn a Ph.D in mathematics, Evelyn Boyd Granville focused on aeronautics and space during her career. in 1956, she worked with NASA and IBM on Project Mercury, the first manned space flight. She worked with NASA again a few years later on various projects for the Apollo program, including celestial mechanics, trajectory computation, and digital computer techniques.", "evelyn_image", "images/Evelyn_Boyd.jpg"), new Date(1956, 1, 1),  new Date(1956, 12, 31) ],
       [ 'womenintech', null, '#695e60', createCustomHTMLContent("Jean E. Sammet", "1962", "In 1962, Jean E. Sammet developed the FORMAC programming language. She was also one of the develoipers of the COBOL programming language", "jean_image", "images/Jean_Sammet.jpg"   ),  new Date(1962, 1, 1),  new Date(1962, 12, 1) ],
       [ 'womenintech', null, '#695e60', createCustomHTMLContent("Mary Kenneth Keller", "1958", "Sister Mary was an American Roman Catholic religious sister, educator and pioneer in computer science. She was the first person to earn a Ph.D. in computer science in the United States. Sister Mary Kenneth Keller also contributed to the development of the BASIC language during her time at Dartmouth College. She then founded the computer science department at Clarke College and directed it for the next 20 years.", "mary_image", "images/Mary_Keller.jpg"), new Date(1958, 1, 1),  new Date(1958, 12, 31) ],
       [ 'womenintech', null, '#695e60', createCustomHTMLContent("Karen Spärck  Jones", "1972", "A professor at Cambridge Computer Laboratory, Karen Spärck Jones was interested in natural language processing and information retrieval. In 1972, she introduced the concept of inverse document frequency, which most search engines still rely on.", "karen_image", "images/Karen_Jones.jpg"), new Date(1972, 1, 1),  new Date(1972, 12, 31) ],
       [ 'womenintech', null, '#695e60', createCustomHTMLContent("Radia Perlman", "1985", "Often called 'the Mother of the Internet', Radia Perlman's work on the spanning tree algorithm and the Spanning Tree Protocol enabled the development of modern networking. She holds more than 100 patents.", "radia_image", "images/Radia_Perlman.jpg"), new Date(1985, 1, 1),  new Date(1985, 12, 31) ],
       [ 'womenintech', null, '#695e60', createCustomHTMLContent("Carol Shaw", "1982", "Carol Shaw is considered to be the first female game designer and programmer in the video game industry. She is best known for creating the Atari 2600 vertically scrolling shooter River Raid (1982) for Activision. She worked for Atari, Inc. from 1978-1980 where she designed multiple games including 3-D Tic-Tac-Toe (1978) and Video Checkers (1980), both for the Atari VCS before it was renamed to the 2600.", "carol_image", "images/Carol_Shaw.jpg"), new Date(1982, 1, 1),  new Date(1982, 12, 31) ],
       [ 'womenintech', null, '#695e60', createCustomHTMLContent("Frances Allen", "1989", "In 1989, Frances Allen became the first female IBM Fellow in 1989. In 2006, she became the first female recipient of the ACM's Turing Award. Her achievements include seminal work in compilers, program optimization, and parallelization.", "frances_image", "images/Frances_Allen.jpg"), new Date(1989, 1, 1),  new Date(1989, 12, 31) ],
       [ 'womenintech', null, '#695e60', createCustomHTMLContent("Chieko Asakawa", "1997", "Chieko Asakawa is a blind Japanese computer scientist, known for her work at IBM Research, Tokyo, in accessibility. A Netscape browser plug-in she developed, the IBM Home Page Reader, became the most widely used web-to-speech system available, opening up Web resources to the blind.", "chieko_image", "images/Chieko_Asakawa.jpg"), new Date(1997, 1, 1),  new Date(1997, 12, 31) ],
       [ 'womenintech', null, '#695e60', createCustomHTMLContent("Sage Sharp", "2015", "In 2015, Sage Sharp became the first winner of the annual Women in Open Source Community Award, awarded by Red Hat. Sage is non-binary and uses they/them pronouns. In 2016, Sage also went on to win the O'Reilly Open Source Award for accomplishments in the open source community.", "sage_image", "images/Sage_Sharp.jpg"), new Date(2015, 1, 1),  new Date(2015, 12, 31) ],
       [ 'womenintech', null, '#695e60', createCustomHTMLContent("Whitney Wolfe Herd", "2020", "Whitney Wolfe Herd launched social and dating app Bumble (an alternative to Tinder that allows the woman to make the first move) in 2014. In 2020, she became the youngest CEO to ever take a company public and was one of only 3 female-founded companies to go public in 2020.", "whitney_image", "images/Whitney_Herd.jpg"), new Date(2020, 1, 1),  new Date(2020, 12, 31) ],
       [ 'womenintech', null, '#ffffff', createCustomHTMLContent("name", "year", "Text.", "image class", "imageURL"), new Date(2021, 1, 1),  new Date(2021, 12, 31) ]]);



  
  chart.draw(dataTable, options);
}

function createCustomHTMLContent(heading, years, text, imageclass, imageURL) {
  return '<div style="padding:5px 5px 5px 5px;">' +
  '<span class="tooltipheading">' + heading + '</span><br/>' +
  '<span class="tooltipyears">' + years + '</span><br/><br/>' +
  '<span class="tooltiptext">' + text + '</span><br/><br/>' + 
  '<img src="' + imageURL + '" class="' + imageclass + '"/><br/>' + '</div>'
  }