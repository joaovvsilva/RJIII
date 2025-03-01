class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.telefones = new Set()
        this.endereco = endereco
        this.#cpf = cpf
    }
    get pegarCpf() {
        return this.#cpf
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone)
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
    formatar() {
        return `DDD: ${this.ddd} Número: ${this.numero}`
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.clientes = new Set()
        this.telefones = new Set()
    }
    get pegarCnpj() {
        return this.#cnpj
    }
    adicionarCliente(cliente) {
        this.clientes.add(cliente)
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone)
    }
    detalhe() {
        let descricao = `Razão Social: ${this.razaoSocial}\n`
        descricao += `Nome Fantasia: ${this.nomeFantasia}\n`
        descricao += "-----------------------------\n"

        this.clientes.forEach(cliente => {
            descricao += `Nome: ${cliente.nome}\n`
            descricao += `Estado: ${cliente.endereco.estado} `
            descricao += `Cidade: ${cliente.endereco.cidade} `
            descricao += `Rua: ${cliente.endereco.rua} `
            descricao += `Número: ${cliente.endereco.numero}\n`

            cliente.telefones.forEach(telefone => {
                descricao += telefone.formatar() + "\n"
            })
            descricao += "\n"
        })
        return descricao
    }
}

let enderecoEmpresa = new Endereco("SP", "São Paulo", "Av. Paulista", "1000")
let empresa = new Empresa("Tech Solutions LTDA", "Tech Solutions", "12.345.678/0001-90", enderecoEmpresa)

let clientes = [
    new Cliente("Gabriel", "111.111.111-11", new Endereco("SP", "São José dos Campos", "Av Andrômeda", "987")),
    new Cliente("Ana", "222.222.222-22", new Endereco("RJ", "Rio de Janeiro", "Av Copacabana", "456")),
    new Cliente("Carlos", "333.333.333-33", new Endereco("MG", "Belo Horizonte", "Rua C", "789")),
    new Cliente("Mariana", "444.444.444-44", new Endereco("BA", "Salvador", "Rua D", "101")),
    new Cliente("Ricardo", "555.555.555-55", new Endereco("RS", "Porto Alegre", "Rua E", "202"))
]

clientes[0].adicionarTelefone(new Telefone("12", "98765-0001"))
clientes[0].adicionarTelefone(new Telefone("12", "91234-0002"))

clientes[1].adicionarTelefone(new Telefone("21", "99999-1111"))
clientes[1].adicionarTelefone(new Telefone("21", "98888-2222"))

clientes[2].adicionarTelefone(new Telefone("31", "97777-3333"))
clientes[2].adicionarTelefone(new Telefone("31", "96666-4444"))

clientes[3].adicionarTelefone(new Telefone("71", "95555-5555"))
clientes[3].adicionarTelefone(new Telefone("71", "94444-6666"))

clientes[4].adicionarTelefone(new Telefone("51", "93333-7777"))
clientes[4].adicionarTelefone(new Telefone("51", "92222-8888"))

clientes.forEach(cliente => empresa.adicionarCliente(cliente))

console.log(empresa.detalhe())
