
const someObject = {size: 10, label: "Size"};

// A simple example of an interface: 
(function (object: { label: string }) {
  console.log(object.label);
})(someObject);


// The same but with the use of an interface
interface ILabeledValue {
  label: string
}

(function(object: ILabeledValue) {
  console.log(object.label);
})(someObject);
