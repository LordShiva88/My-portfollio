// data.forEach((details) => {
//   const ImageLinkElement = details.querySelector(
//     ".woocommerce-product-gallery__image img"
//   );
//   const NameElement = details.querySelector(".product-title");
//   const ConditionElement = details.querySelector(
//     'li.uppercase span[data-text-color="success"]'
//   );

  // Checking if elements exist before reading properties
  // const ImageLink = ImageLinkElement
  //   ? ImageLinkElement.getAttribute("src")
  //   : null;
  // const Name = NameElement ? NameElement.textContent : null;
  // const Condition = ConditionElement ? ConditionElement.textContent : null;

  // // Extracting all image links from the thumbnail slider
  // const ImageLinks = Array.from(
  //   details.querySelectorAll(".product-thumbnails a")
  // ).map((thumb) => {
  //   const thumbImage = thumb.querySelector("img");
  //   return thumbImage ? thumbImage.getAttribute("data-src") : null;
  // });

  // const MeterCountElement = details.querySelector(
  //   'li.uppercase:nth-child(2) span[data-text-color="success"]'
  // );
  // const DeliveryElement = details.querySelector(
  //   'li.uppercase:nth-child(3) span[data-text-color="success"]'
  // );

  // Checking if elements exist before reading properties
  // const MeterCount = MeterCountElement ? MeterCountElement.textContent : null;
  // const Delivery = DeliveryElement ? DeliveryElement.textContent : null;

  // // Extracting delivery and installation starting costs
  // const DeliveryStartsAtElement = details.querySelector(
  //   ".us-container:nth-child(5) span"
  // );
  // const InstallationStartsAtElement = details.querySelector(
  //   ".us-container:nth-child(6) span"
  // );

  // Checking if elements exist before reading properties
//   const DeliveryStartsAt = DeliveryStartsAtElement
//     ? DeliveryStartsAtElement.textContent
//     : null;
//   const InstallationStartsAt = InstallationStartsAtElement
//     ? InstallationStartsAtElement.textContent
//     : null;

//   console.log({
//     ImageLink,
//     Name,
//     Condition,
//     ImageLinks,
//     MeterCount,
//     Delivery,
//     DeliveryStartsAt,
//     InstallationStartsAt,
//   });
// });