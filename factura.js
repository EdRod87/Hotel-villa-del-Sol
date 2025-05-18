function calcularTotal() {
  const personas = parseInt(document.getElementById('personas').value) || 0;
  const noches = parseInt(document.getElementById('noches').value) || 0;
  const total = personas * noches * 70;

  document.getElementById('total').value = `Q ${total}`;
}
