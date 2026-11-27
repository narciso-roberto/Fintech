import Configuracoes from "../assets/Configuracoes";
import Logo from "../assets/Logo";
import Resumo from "../assets/Resumo";
import Vendas from "../assets/Vendas";
import Webhooks from "../assets/Webhooks";
import Button from "./Button";

function Header() {
  return (
    <div className="flex flex-col bg-[#eceadd] items-start p-8 gap-10 rounded-2xl">
      <Logo />
      <nav>
        <ul className="flex flex-col gap-4">
          <li>
            <Button text="Resumo" Icon={Resumo} />
          </li>
          <li>
            <Button text="Vendas" Icon={Vendas} />
          </li>
          <li>
            <Button text="Webhooks" Icon={Webhooks} />
          </li>
          <li>
            <Button text="Configurações" Icon={Configuracoes} />
          </li>
          <li>
            <Button text="Contato" Icon={Vendas} />
          </li>
          <li>
            <Button text="Sair" Icon={Resumo} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
