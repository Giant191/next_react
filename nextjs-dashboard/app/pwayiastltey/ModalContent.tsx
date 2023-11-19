export default function ModalContent({ onClose }) {
  const onButtonClick = () => {
    const date = new Date();
    const dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    const res = fetch(`api/create-pets-table?dateString=${dateString}&typeString=1`);
    // using Java Script method to get PDF file
    fetch("S__241999875.jpg").then((response) => {
      response.blob().then((blob) => {

        // Creating new object of PDF file
        const fileURL =
          window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "S__241999875.jpg";
        alink.click();
      });
    });
  };
  return (
    <div className="modal-mask">
      <div className="modal-container">
        <div className="modal-header">
          <slot name="header">解壓縮密碼</slot>
        </div>

        <div className="modal-body">
          <slot name="body">你的生日:yyyy_MM_dd</slot>
        </div>

        <div className="modal-footer">
          <slot name="footer">
            <button onClick={onButtonClick} className="rounded-md border p-2 hover:bg-gray-100"> 下載 </button>
            <button className="modal-default-button rounded-md border p-2 hover:bg-gray-100" onClick={onClose}>Close</button>
          </slot>
        </div>
      </div>
    </div >
  );
}
