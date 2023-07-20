import { expect } from 'chai';
import sinon from 'sinon';
import { Button } from ".";

describe('Button component', () => {
  it('Should be clickable', () => {
    const callback = sinon.stub();
    const button = new Button({ label: '123', events: { click: callback }});

    const element = button.element as HTMLElement;

    element.click();

    expect(callback.calledOnce).to.eq(true);
  });
});