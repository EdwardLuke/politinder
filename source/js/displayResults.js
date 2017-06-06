const partyDetails = {
    'Con' : {
        'name' : 'The Conservatives',
        'logo' : "../assets/img/party_logos/conservatives1.png",
        'url'  : "https://www.conservatives.com"
    },
    'DUP' : {
        'name' : 'The Democratic Union Party',
        'logo' : "../assets/img/party_logos/dup.png",
        'url'  : "http://www.mydup.com/"
    },
    'Green' : {
        'name' : 'The Green Party',
        'logo' : "../assets/img/party_logos/green.png",
        'url'  : "https://www.greenparty.org.uk/"
    },
    'LDem' : {
        'name' : 'The Liberal Democrats',
        'logo' : "../assets/img/party_logos/libdem.png",
        'url'  : "http://www.libdems.org.uk/"
    },
    'Lab' : {
        'name' : 'The Labour Party',
        'logo' : "../assets/img/party_logos/labour1.png",
        'url'  : "http://www.labour.org.uk/index.php/home/"
    },
    'PC' : {
        'name' : 'Plaid Cymru',
        'logo' : "../assets/img/party_logos/Plaid.png",
        'url'  : "http://www2.plaid.cymru/"
    },
    'SDLP' : {
        'name' : 'Social Democratic and Labour Party',
        'logo' : "../assets/img/party_logos/sdlp.png",
        'url'  : "https://www.sdlp.ie/"
    },
    'SF' : {
        'name' : 'Sinn Fein',
        'logo' : "../assets/img/party_logos/sinn_fein.png",
        'url'  : "https://www.sinnfein.ie/"
    },
    'SNP' : {
        'name' : 'The Scotish National Party',
        'logo' : "../assets/img/party_logos/snp.png",
        'url'  : "https://www.snp.org/"
    },
    'UKIP' : {
        'name' : 'UK Independence Party',
        'logo' : "../assets/img/party_logos/ukip.png",
        'url'  : "http://www.ukip.org/"
    },
    'UUP' : {
        'name' : 'Ulster Unionist Party',
        'logo' : "../assets/img/party_logos/uup.jpg",
        'url'  : "https://www.uup.org/"
    }
}

export default function displayResults(userProfile, resultsButton, total) {
    resultsButton.addEventListener("click", function() {
        console.log(userProfile);
        createResultsDisplay(userProfile, total)
    }, false);
};

function createResultsDisplay(userProfile, total) {
    const sortedParties = Object.keys(userProfile).sort(function(a,b){return userProfile[a]-userProfile[b]});
    console.log(sortedParties);
    const ul = document.createElement('ul');
    sortedParties.forEach(function(party) {
        let partyScore = (userProfile[party] / total) * 100;
        let li = document.createElement('li');
        li.setAttribute('class', 'party-result')
        li.dataset['partyid'] = party;
        li.innerHTML = `<span class="party-name">${partyDetails[party].name} : ${partyScore}%</span>`;
        ul.appendChild(li);
    });
    document.getElementsByClassName('results-container')[0].appendChild(ul);
}
