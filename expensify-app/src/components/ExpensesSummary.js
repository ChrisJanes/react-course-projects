import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';

import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export class ExpensesSummary extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.expenseCount === 0 ? (
            <p>Viewing 0 expenses</p>
          ) : (
            <p>
              Viewing {this.props.expenseCount} expenses totalling {numeral(this.props.expensesTotal/100).format('$0,0.00')}
            </p>
          )
        }
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    expenseCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
