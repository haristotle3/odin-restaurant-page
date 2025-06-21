function createContactItem(name, title, phoneNo, email) {
  const contactDiv = document.createElement("div");

  const nameEle = document.createElement("h2");
  const titleEle = document.createElement("p");
  const phoneEle = document.createElement("p");
  const emailEle = document.createElement("p");

  nameEle.textContent = name;
  titleEle.textContent = title;
  phoneEle.textContent = phoneNo;
  emailEle.textContent = email;

  contactDiv.appendChild(nameEle);
  contactDiv.appendChild(titleEle);
  contactDiv.appendChild(phoneEle);
  contactDiv.appendChild(emailEle);

  return contactDiv;
}

function createContact() {
  const root = document.querySelector("#content");
  const actualContent = document.createElement("div");
  actualContent.classList.add("actual-content");

  const h1 = document.createElement("h1");
  h1.textContent = `Contact Us 📞`;

  const contactOneDiv = createContactItem(
    `🍔 Patty McFlip`,
    `Chief Burger Officer`,
    `📞 +1 (555) 123-4567`,
    `📧 patty@odintiffins.com`
  );

  const contactTwoDiv = createContactItem(
    `🍕 Mozza Larella`,
    `Director of Cheesy Affairs`,
    `📞 +1 (555) 234-5678`,
    `📧 mozza@odintiffins.com`
  );
  const contactThreeDiv = createContactItem(
    `🥐 Cris P. Roll`,
    `Head of Flaky Operations`,
    `📞 +1 (555) 345-6789`,
    `📧 cris@odintiffins.com`
  );

  actualContent.appendChild(h1);
  actualContent.appendChild(contactOneDiv);
  actualContent.appendChild(contactTwoDiv);
  actualContent.appendChild(contactThreeDiv);
  root.appendChild(actualContent);
  return;
}

export default createContact;