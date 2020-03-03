import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import {Button} from 'reactstrap';

class Typeform extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="ExamplePopup">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://geshergroup.typeform.com/to/O3bfe5"
          hideHeaders
          hideFooter
          buttonText="Apply"
          style={{ top: 100 }}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />
        <Button className="btn primary" onClick={this.openForm} color={this.props.color} size="lg" type="button" style={{ cursor: 'pointer'}}>
          Apply here
        </Button>
      </div>
    );
  }
}

export default Typeform;