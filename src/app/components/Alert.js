import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissibleExample({ show, setShow, variant, message }) {
  console.log("show:", show);
  console.log("setShow:", setShow);
  console.log("variant:", variant);
  console.log("message:", message);

  if (show) {
    return (
      <Alert
        variant={variant}
        onClose={() => setShow(false)}
        dismissible
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 9999,
          minWidth: '400px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          backgroundColor: variant === 'success' ? '#d4edda' : '#f8d7da',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '10px',
        }}
      >
        <Alert.Heading style={{textAlign:"left", marginLeft:"10px", fontWeight:"400"}}>{message}</Alert.Heading>
        {/* <p>{message}</p> */}
      </Alert>
    );
  }

  return null;
}

export default AlertDismissibleExample;
