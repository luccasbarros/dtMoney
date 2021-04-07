import {useContext} from 'react';
import {Container} from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import {TransactionsContext} from '../../TransactionsContext'

export function Summary() {
  const {transactions} = useContext(TransactionsContext);
  return (
    <div>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="Entradas" />
          </header>
          <strong>R$1000</strong>
        </div>

        <div>
          <header>
            <p>Saidas</p>
            <img src={outcomeImg} alt="Saídas" />
          </header>
          <strong>R$500</strong>
        </div>

        <div className="highlight-background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>R$500</strong>
        </div>
      </Container>
    </div>
  )
};