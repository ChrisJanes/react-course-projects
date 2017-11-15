let buttonText = 'Show details';
let detailToggled = false;

const onDetailToggle = (e) => {
  detailToggled = !detailToggled;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onDetailToggle}>
        {detailToggled ? 'Hide details' : 'Show details'}
      </button>
      {detailToggled && <p>Hey. These are some details you can now see!</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

render();
