import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dishes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.css'
})
export class DishesComponent {
recipe: { title: string; image: string }[] = [
    { title: 'Postres Peruanos', image: 'https://s3-alpha-sig.figma.com/img/5874/f020/1b229a7dbb865b5fb1893ccbc36d4eba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jtvHcpUNnb-oVG8agfD031HQ9LhsL4yuXjji5sqzSaBNWYyUGUfB30e5mHS3eap8RjHOidHR~uPhdZupUCQKPQ6xJAD9KIRn2MXkZHaVUsARjiEo3VAam9Qtxp7p4vMxeInjy7IhgyArp29g0XAfKzOFvfre0x656QjwF0XjFaWzsqaBEqZOK86hcx~eJdq~vVi7V~9aivVt7o0ZASLG8mbIwj9KwKiLqQMQsDSO7jiyqT4c1o9tCZ12HqmAOLpOVa1g58xxzTkpfZsFfBtk63SP-jax7-8jDV0GUIjy~eu03Fj0-M1oH0-dMYORZu8c1Vf2dp3ckD4ZuMjgRZdnqw__' },
    { title: 'Causa Rellena', image: 'https://s3-alpha-sig.figma.com/img/8b7d/a790/9be180250b49442f01e7b01966f0d614?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BChBI53VOu8YrEC1GFimlKlUv~G2hJw7UcmmPXFeh5N9aq4L9ElB6vh2K9ESNfbL6499OKXi5zcwBXNFOTMQJ4o6XiizMaFuQ1~IEyvqUFFoGNjX0OmMORwRymlhQpFLn-B0QPkCmVP-7IJNe2r-kdfiSBXc9F1KP9~ON~2I7t5s~CNyBDVOfvPSuIT8dW3IcD9KuvMnxL3awS2RxXxkunwcgitubrS0uoxdTzEKeCS9RgAmMFxSe5VzX1YlXPJltLCH7A2VddXFCpXxUkCZ~neRqF73oiQa3nHI~AGrXt-r6zlfqs-YPd3oTYNXh5ZWx4Qu18TSwmgB4D5Eq-UZFg__' },
    { title: 'Ají de Gallina', image: 'https://s3-alpha-sig.figma.com/img/6b66/bed9/88077fc3cb5a2a30dcbd9eabc86ba419?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxzNGkJDbtzX6lm6j47Vr24Vz5kmG0ib2daIgyyaQxNoBGSaccN99TS6M2ql1Zmrj6NE4aEDDYa2u71O60B333sH5mAyJIpjTIH7Yxp-beWk2hqwZII09FxfH0BozP2tM7E8HAfo2WrCYh0XESRCy5i3571yclXYS3EgkQ~ekNV-C4cH1p35S~yz1n~J0EoS9RAHUXrKh2ImXsP06lAa8utWMzQ8Ry2ObHdl8rF~wifhRGej45WZjeSdrbHX5hB~FIIBziLXfgCPDCmF5~MGRnfbVruqEG0fwl52bgBvW25h87SAcdyYKbs5SQJoZwAkd9FWItP8I9V0QSDbS3JeXA__' },
    { title: 'Pisco Sour', image: 'https://s3-alpha-sig.figma.com/img/7e47/38b8/c2bafa656cebbedb8fe14c145479de71?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VU~tZaSnnF~T1iYWEbP20fPL4j3jqokjE5TIXoJqgywqSm4CZ1Okx5eRVLq1pw6jhRJrbrtvitvgbw561EecG~O0DU1NJtlAVP-Tt09P-NUH-asr44-PtTg2fD1sI607OMlrEvd7xOXj5XIjhx~m3CABx0uh8VSyqldYFrJI6Dpc6nWnYjKFyxzJBkMhYkGhn3HbnOpXs9A9Mx7LonLlYyY5bksQODnCnzU0Ggfz4YXUnwQKySvMuRd9rdRRpYcIMFL8QiFqcDG9pgUzKCQZn8LYsrekgcDQVZrehkyBJxphB3GTXVM3ShhJOhJb1IjdJKN8FUWl17Q6rl6zm1pzoQ__' },
    { title: 'Ceviche', image: 'https://s3-alpha-sig.figma.com/img/ffa1/9c08/48020fd115405e37910182bd0d0f0a99?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d39Z9aUJaX4JfUqztkq~cO14k3SycyGysa-MJaw8QuWrEWfJWpKCGDj32aX07F7UjfwuiqonfiIyubeBysyG3-Cvpfo4KTAYbZDSofgliwid5FtQ2k4FlOdcSWfeCdxG3nT-2nwcu5Yl2QQQh4aTCrJoRXwFXPbt-fMjSte53-TpPP~67Y5xSUVcENjWW-litIBToDAr4a2CILxqL8WiM6TXKDQEnO05NGjFku7ElgZvGKBR9lnkp7uk-WBZJ6Vpc1dWE47LAKm~Bsfss7JYRn9JvGzX7xVSOhaLVDU8pFdayCT4UPnjupo5MN5Sn1JpYnWwvzb-fW6M-7iitifxFQ__' }
  ];
}
