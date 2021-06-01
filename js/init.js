(function ($) {
  $(function () {

    let selectedEntries = '5';
    const ROWS = [
      {
        ID: 1,
        Name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 889,
        Warehouse: 'Casentinesi',
        Actions: '',
      },
      {
        ID: 2,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      },
      {
        ID: 3,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      },
      {
        ID: 4,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi Parco Foreste Casentinesi Parco Foreste Casentinesi Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      }, {
        ID: 5,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi Parco Foreste Casentinesi Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      },
      {
        ID: 6,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      },
      {
        ID: 7,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      },
      {
        ID: 8,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      },
      {
        ID: 9,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      },
      {
        ID: 10,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      },
      {
        ID: 11,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      },
      {
        ID: 12,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      },
      {
        ID: 13,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      },
      {
        ID: 14,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      },
      {
        ID: 15,
        name: "Monte Falco",
        Manufacturer: 'Casentinesi',
        Info: "Parco Foreste Casentinesi",
        QTY: 1833,
        Price: 999,
        Warehouse: 'Casentinesi',
        Actions: '',
      }
    ];

    const table = document.getElementById("table");
    const data = Object.keys(ROWS[0]);
    const selectedEntriesElem = document.getElementById('selected-entries');
    const totalEntriesElem = document.getElementById('total-entries');
    const selectedEntriesText = document.createTextNode(selectedEntries);
    const totalEntriesText = document.createTextNode(ROWS.length);
    const selectElems = $('select');
    const authForm = document.getElementById('auth-form');

    $('.sidenav').sidenav();
    selectedEntriesElem.appendChild(selectedEntriesText);
    totalEntriesElem.appendChild(totalEntriesText);
    selectElems.formSelect();

    selectElems[0].addEventListener('change', (event) => {
      selectedEntriesElem.innerHTML = '';
      const newValue = event.target.value;
      if (selectedEntries !== newValue) {
        selectedEntries = newValue; 
        const newSelectedEntriesText = document.createTextNode(selectedEntries);
        selectedEntriesElem.appendChild(newSelectedEntriesText);
        table.innerHTML = '';
        generateTable(table, ROWS);
      }
    });

    authForm.addEventListener('submit', (event) => {
      event.preventDefault();
      console.info('submit event: ', event);
    });

    authForm.addEventListener('change', (event) => {
      console.info('change event: ', event);
    });

    function generateTableHead(table, data) {
      const thead = table.createTHead();
      const row = thead.insertRow();
      for (let key of data) {
        const th = document.createElement("th");
        const text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }
    };

    function generateTable(table, data) {
      for (let element of data) {
        let row;

        if (+element.ID <= +selectedEntries) {
          row = table.insertRow();
          row.setAttribute("id", element.ID);
        }
        
        for (key in element) {
          const cell = row.insertCell();

          if (key !== 'Actions') {
            const text = document.createTextNode(element[key]);
            cell.appendChild(text);
          } else {
            const iconRemoveText = document.createTextNode('delete');
            const iconEditText = document.createTextNode('edit');
            const iconEdit = document.createElement("i");
            const iconRemove = document.createElement("i");
            const buttonEdit = document.createElement("button");
            const buttonRemove = document.createElement("button");

            iconEdit.classList.add('material-icons', 'edit');
            iconRemove.classList.add('material-icons', 'remove');

            iconEdit.appendChild(iconEditText);
            iconRemove.appendChild(iconRemoveText);

            buttonEdit.appendChild(iconEdit);
            buttonRemove.appendChild(iconRemove);

            buttonEdit.addEventListener('click', (event) => {
              console.info('event: ', event);
            });

            buttonRemove.addEventListener('click', (event) => {
              if (event.path[3]) { // mock
                const eleToRemove = event.path[3];
                const valueToRemove = +eleToRemove.id;
                ROWS.splice(valueToRemove, 1);
                eleToRemove.remove();
              }
            });

            cell.classList.add('actions');
            cell.appendChild(buttonEdit);
            cell.appendChild(buttonRemove);
          }
        }
      }
    };
    
    generateTableHead(table, data);
    generateTable(table, ROWS);
  });
})(jQuery);
