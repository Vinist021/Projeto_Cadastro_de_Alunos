var alunos = [
    {
        id: 1,
        nome: 'Pedro Antônio',
        email: 'pedro.antonio@abutua.com',
        telefone: '(15)9999-9999',
        idCurso: 1,
        turno: 3
    },
    {
        id: 2,
        nome: 'Maria Francisca',
        email: 'mariaff@gmail.com',
        telefone: '(15)1234-5678',
        idCurso: 2,
        turno: 2
    }
];

var cursos = [
    {id: 1, nome: 'Angular'},
    {id: 2, nome: 'Java'},
    {id: 3, nome: 'SQL'}
];

var turnos = [
    {id: 1, nome: 'Manhã'},
    {id: 2, nome: 'Tarde'},
    {id: 3, nome: 'Noite'}
];

//Carregar todos os produtos
function loadAlunos() {
    for(let aluno of alunos) {
        addNewRow(aluno);
    }
}

loadAlunos();

function save() {
    const addAluno = 
    {
        id: alunos.length + 1,
        nome: document.getElementById("inputNome").value,
        email: document.getElementById("inputEmail").value,
        telefone: document.getElementById("inputTelefone").value,
        idCurso: document.getElementById("selectCurso").value,
        turno: pegarTurno()
    }

    addNewRow(addAluno);
    alunos.push(addAluno);

    document.getElementById("formAlunos").reset();
}

function pegarTurno() {
    const turno = document.querySelector('input[name="gridRadios"]:checked').value;
    return turno;
  }

function addNewRow(aluno) {
    var table = document.getElementById("studentsTable");

    var newRow = table.insertRow();
    
    //inserir id aluno
    var idNode = document.createTextNode(aluno.id);
    newRow.insertCell().appendChild(idNode);

    //inserir nome aluno
    var nameNode = document.createTextNode(aluno.nome);
    newRow.insertCell().appendChild(nameNode);

    //inserir email aluno
    var emailNode = document.createTextNode(aluno.email);
    newRow.insertCell().appendChild(emailNode);

    //inserir telefone aluno
    var phoneNode = document.createTextNode(aluno.telefone);
    newRow.insertCell().appendChild(phoneNode);

    //inserir curso aluno
    var courseNode = document.createTextNode(cursos[aluno.idCurso - 1].nome);
    newRow.insertCell().appendChild(courseNode);

    //inserir turno aluno
    var shiftNode = document.createTextNode(turnos[aluno.turno - 1].nome);
    newRow.insertCell().appendChild(shiftNode);
}