const _onSubmit = async () => {
  const productCode = await document.getElementById("product_code").value;
  const nameProduct = await document.getElementById("name_product").value;
  const seller = await document.getElementById("seller").value;
  const nameCompany = await document.getElementById("name_company").value;
  const savePerson = await document.getElementById("seve_person").value;
  const namePerson = await document.getElementById("name_person").value;
  const department = await document.getElementById("department").value;
  const consigneeProduct = await document.getElementById("consignee_product")
    .value;
  const consigneeName = await document.getElementById("consignee_name").value;
  const discriptionProduct = await document.getElementById(
    "discription_product"
  ).value;

  console.log({
    productCode: productCode,
    nameProduct: nameProduct,
    seller: seller,
    nameCompany: nameCompany,
    savePerson: savePerson,
    namePerson: namePerson,
    department: department,
    consigneeProduct: consigneeProduct,
    consigneeName: consigneeName,
  });
};
