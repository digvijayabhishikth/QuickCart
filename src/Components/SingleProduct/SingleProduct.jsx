import { useNavigate } from "react-router-dom";
import Icon from "../../../public/QuickCart_Icon.png";
import { useCart } from "../../context/cart-context";
import { useState } from "react";

const SingleProduct = ({ product }) => {
  console.log(`this is in single product component prop : ${product}`);

  const { cart, cartDispatch } = useCart();

  const inCart = cart.find((p) => p.id === product.id);
  console.log(inCart);

  const navigate = useNavigate();
  const onAddToCartClick = () => {
    console.log(`Inside button click`);
    !inCart ?
    cartDispatch({
      type: "ADD_TO_CART",
      payload: { product },
    }) : navigate('/cart');
  };

  console.log(cart);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = product.images.length > 0 ? product.images : [Icon];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="w-full bg-gray-100 sm:flex relative">
        {/* Image div */}
        <div className="md:w-[50%] sticky top-0">
          <div>
            <div>
              <img
                src={images[currentIndex]}
                alt="Product"
                className="object-cover w-full h-full rounded-md"
                key={`${product.id}-${currentIndex}`}
              />

              {/* Previous Images Handler */}

              {images.length > 1 && (
                <span
                  onClick={handlePrev}
                  className="absolute left-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-1 cursor-pointer outline-none"
                >
                  <span className="material-icons-outlined !text-xl outline-none">
                    chevron_left
                  </span>
                </span>
              )}

              {/* Next Image Handler */}
              {images.length > 1 && (
                <span
                  onClick={handleNext}
                  className="absolute right-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-1 cursor-pointer outline-none"
                >
                  <span className="material-icons-outlined !text-xl">
                    chevron_right
                  </span>
                </span>
              )}

              {images.length > 1 && (
                <div className="flex justify-center absolute gap-2 mt-2 top-2 left-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                        index === currentIndex
                          ? "bg-cyan-500 scale-110"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full gap-10 p-4">
            <button
              onClick={onAddToCartClick}
              className="w-full border p-2 flex items-center text-2xl justify-center gap-4 rounded-md bg-emerald-600 text-slate-50"
            >
              {
                inCart ? `Go to cart` : `Add to Cart`
              }
              <span className="material-icons-outlined">
                {
                  inCart ? `shopping_cart_checkout` : `shopping_cart`
                }
              </span>
            </button>
            <button className="w-full border p-2 flex items-center text-2xl justify-center gap-2 rounded-md">
              Add to Wishlist
              <span className="material-icons">favorite_border</span>
            </button>
          </div>
        </div>
        {/* Product details div */}
        <div className=" md:w-[50%] md:h-[140vh] overflow-y-auto maxx-h-screen border p-3">
          <div>
            <p>Desc and title</p>
            <div>
              <div>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
              </div>
              <div>No.of rating and reviews</div>
            </div>
            <div>
              <span>price</span>
              <span>
                <s>old price</s>
              </span>
              <span>discount</span>
            </div>
            <div>
              <span>ABCDEFFHUGYFAFEIADFYGDIAHBFIAYDFBUOEGFYUhjgkvhyfty</span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                modi temporibus aut, mollitia tempora pariatur ratione vero
                velit praesentium odit corporis, doloribus dolorem at,
                perspiciatis magnam veritatis aliquam enim id? Adipisci odit,
                natus ratione earum explicabo beatae ipsam rem possimus totam
                optio exercitationem, repudiandae architecto cupiditate in
                officiis nostrum iure consequatur. Nisi labore architecto nemo
                ullam ipsum laudantium iusto sapiente. Maxime consectetur
                corrupti sed debitis, quisquam recusandae doloremque officia
                tenetur est molestias rerum nulla sapiente exercitationem a id,
                similique consequatur illo voluptatum. Dignissimos qui
                temporibus tenetur reprehenderit nostrum at amet! Id rem ipsam,
                nihil porro totam accusamus odio nemo. Iusto temporibus ad
                magnam quos dolor praesentium nihil quasi delectus, autem
                suscipit est pariatur harum sapiente facere excepturi fugit,
                voluptatem saepe. Facere odit maxime consequuntur modi sequi
                molestiae? Perspiciatis aliquid alias eum, eius recusandae nobis
                modi quia cumque, esse voluptatibus nemo id, est corporis
                incidunt architecto itaque et. Accusamus, numquam vero. Ipsum
                hic necessitatibus similique maxime! Inventore, maxime aut sequi
                nisi excepturi eos voluptates laborum labore aperiam unde.
                Recusandae sequi repudiandae deleniti consectetur fugiat odit,
                minus sunt reprehenderit voluptatum, sed illo. Labore voluptate
                eius accusantium eos saepe molestiae ullam ipsa. Fugit illum
                veniam minus facilis deserunt nemo doloribus illo, sed ipsam
                distinctio quasi asperiores nihil labore in error. Cupiditate,
                dignissimos saepe? Adipisci distinctio perferendis,
                reprehenderit est iste non fugit, maxime ducimus accusantium aut
                repellendus reiciendis at quod obcaecati minima soluta nemo,
                aliquid sequi vero nulla maiores voluptatum perspiciatis.
                Pariatur, voluptas quasi? Eveniet quae doloremque porro pariatur
                vero non sed culpa veniam ullam explicabo deserunt, facilis
                iusto eligendi harum quisquam cum fugiat dolorem unde mollitia
                praesentium error nemo iste natus. Eligendi, earum. Possimus
                earum dolorem non numquam modi quisquam et provident voluptates.
                Repellendus voluptate rem laboriosam quibusdam molestiae neque
                saepe? Sed quisquam molestias accusamus, ab voluptate
                perferendis est consequatur quibusdam amet aperiam. Recusandae,
                ea! In quo error deserunt laudantium doloremque exercitationem
                quia minima iure ullam dolor odio voluptas enim cum eaque,
                maiores eius! Cum est quam, delectus aut commodi sequi modi
                iure. Rerum in maiores ratione autem, dolores commodi a, ex
                nihil dolorem quas quia ad, aliquid nam neque minima placeat
                iusto? Aliquid repellat laboriosam non vel distinctio laudantium
                amet deserunt reprehenderit! Consequatur libero nisi quaerat
                labore dolor a reprehenderit cumque dicta quo aspernatur,
                incidunt ex tempora aperiam perferendis nulla quas voluptates
                enim rerum quam architecto. Sed culpa corporis velit? Possimus,
                mollitia! Tempora, eius aspernatur. Aliquam labore natus
                architecto sit, praesentium iure porro reiciendis ad,
                consequuntur et quis, nemo vitae a explicabo eum similique ut
                sint. In eius expedita distinctio qui ex! Rem quaerat inventore,
                expedita possimus et ad officiis eligendi a nihil facilis eum
                magnam nam voluptate perspiciatis, enim suscipit! Quaerat, est
                quas. Totam corrupti veniam reprehenderit velit doloremque
                aperiam quibusdam. Autem nobis a reiciendis tempora quisquam
                provident tenetur nesciunt sint ad, laborum, itaque veritatis
                sit, aspernatur aperiam minus qui! Suscipit inventore laboriosam
                voluptate sint cum quasi eaque delectus vitae et. Vel laborum
                praesentium voluptate possimus quisquam, et unde saepe quae,
                beatae optio explicabo voluptatum fugit minus eveniet at
                asperiores ratione, nisi adipisci est. Numquam, ratione velit
                debitis incidunt ut aperiam. Quaerat mollitia pariatur nulla.
                Aut ducimus veniam iste esse repudiandae sequi nisi unde. Quis
                nemo, neque hic eligendi reiciendis dolorem dignissimos dicta
                fugiat quas eos. Quam maiores praesentium assumenda ad?
                Voluptas, in reiciendis optio quis accusantium et quod quas,
                enim esse officiis voluptatem earum. Veniam quod, magni quam
                porro quaerat in sit a aliquid iusto, vero nemo eveniet enim
                voluptatem. Obcaecati quaerat reiciendis, magni repellendus
                sequi natus quod molestiae quae. Quia, voluptatibus qui sunt
                assumenda quam autem maxime ut placeat rem quaerat distinctio
                perspiciatis, vitae totam, pariatur dolorum illum nulla. Animi,
                ea repellendus? Culpa impedit maiores ipsa veritatis voluptas
                voluptate repellat possimus, vero, laudantium, dolorum maxime
                nisi! Nam ducimus eos ratione, tenetur, consectetur tempore
                obcaecati excepturi nulla exercitationem, recusandae voluptatem?
                Sapiente odio sint, in officiis aspernatur architecto inventore
                temporibus laboriosam, consequatur adipisci nisi maxime numquam!
                Quasi aliquid in maiores repellendus ratione repudiandae, quo,
                hic dolorum alias similique odio est qui. Atque aut alias
                suscipit veritatis a similique quaerat qui odio maiores minus
                tempore aliquam natus, consectetur temporibus dolorem harum
                tenetur voluptas! Veritatis aspernatur aliquid quam neque
                laborum minus quisquam sapiente. Perspiciatis, nihil. Atque
                ipsam repellat dicta? Tempora doloremque expedita voluptatem
                dolores repellendus maxime perferendis non ut minus temporibus
                doloribus enim vel nisi blanditiis esse, officia a quas numquam
                quidem consectetur. Sunt quam itaque quaerat libero, eaque
                voluptate iste eveniet! Ipsam optio quidem harum minus explicabo
                incidunt voluptatibus laborum excepturi. Ducimus inventore velit
                porro corrupti culpa in aliquid sint suscipit illum. Provident
                enim voluptatum, modi animi quo, quia distinctio eaque dolore
                maiores esse tempore ratione consequatur fugit officiis
                doloremque in necessitatibus. Est molestiae voluptates dicta,
                dolore consectetur recusandae! Sunt, deserunt quos! Voluptas
                alias minus laborum ad quae soluta, repellat laboriosam
                assumenda vel itaque sunt possimus ea facilis ab enim velit
                placeat consequuntur doloremque est! Harum expedita, quod
                doloremque tempore dignissimos magnam. Dignissimos odit
                obcaecati libero quisquam accusantium quo eaque assumenda et cum
                culpa. Sint, facilis voluptates repudiandae voluptatibus ipsam
                culpa quam exercitationem et, aliquam, assumenda quod explicabo
                ducimus molestias ipsum perspiciatis. Corrupti, a! Quaerat magni
                dolores nisi ratione, minima dicta tenetur praesentium similique
                assumenda eveniet facere eaque deserunt voluptatum optio
                expedita consequatur dolore, laudantium error quia impedit
                voluptas delectus quam? Tempore! Vitae quod assumenda soluta eum
                ea fugit illum. Fuga aut illum distinctio quod dolorum
                obcaecati, et eaque recusandae qui laborum doloribus est nam
                quidem adipisci quae, voluptatem odit, quis praesentium. Tenetur
                mollitia voluptatibus consequuntur, laborum blanditiis, amet
                atque nulla repudiandae illum sequi reprehenderit nihil velit
                rerum reiciendis unde magnam modi vitae. Dolorem mollitia
                explicabo exercitationem iusto rem excepturi culpa delectus.
                Nemo eius, dicta suscipit laborum quis hic corrupti similique
                error consequatur harum laudantium exercitationem repudiandae a
                accusantium perferendis mollitia tenetur? Ipsam quae quaerat
                labore facere voluptatum, ex magni illo eligendi? Natus, velit
                distinctio aliquam voluptatibus officiis aliquid, consectetur
                cum cumque consequuntur deserunt voluptatum. Officia laboriosam
                rem eius esse repudiandae necessitatibus, labore inventore
                temporibus. Praesentium sed ullam consequatur culpa impedit
                ducimus. Eum nostrum labore odit numquam consequatur veniam
                voluptas soluta aperiam aut optio ipsa, deserunt cum asperiores,
                similique vitae ducimus deleniti rem quod quis? Quidem sint
                sequi veniam aperiam maiores doloribus? Nemo, perspiciatis sed
                debitis magni perferendis suscipit excepturi quibusdam
                distinctio nam maiores repellat recusandae mollitia fugiat odio
                aliquam libero dolorum expedita illum. Est debitis officia odio
                asperiores perspiciatis possimus neque? Aut beatae magni culpa
                natus itaque inventore tenetur dignissimos facilis dolor sit
                soluta consequatur dolorum quia amet totam quisquam assumenda
                illum debitis, necessitatibus excepturi. Et deserunt illo natus
                perferendis voluptate. Illum expedita eius voluptates sint
                pariatur consequuntur obcaecati alias maiores explicabo natus
                omnis iure cumque molestiae labore at, saepe porro quidem
                recusandae quaerat officia earum quis dicta impedit? Deserunt,
                velit. Illum modi veniam, soluta nemo cupiditate dolorum ab
                voluptatibus perspiciatis, voluptas omnis dolores hic laborum
                odit dolore inventore sapiente! Expedita, sunt! Alias qui,
                magnam placeat facilis possimus quidem. Sequi, consequatur!
                Nihil odit maiores nam, incidunt quo labore. Quo veritatis
                cupiditate minima eaque quos ratione pariatur impedit illo
                inventore ullam totam soluta culpa natus atque autem obcaecati
                nemo voluptate, magni fugiat! Modi, ipsa quaerat. Dolore quaerat
                aut expedita ut illum minus iure delectus officiis ratione
                error? Expedita repellendus perspiciatis corrupti totam
                obcaecati accusamus qui blanditiis? Et quis dignissimos
                reprehenderit tenetur rerum? Rem inventore pariatur expedita
                accusamus ut, dignissimos, dolore veritatis odio voluptatibus
                illo id reprehenderit ullam soluta corporis consequatur dicta
                quis aut asperiores quidem assumenda quos natus. Unde numquam
                magnam quaerat. Reiciendis pariatur quis minima rerum eos
                dolores quam fugiat. Doloribus quod accusantium asperiores, quis
                ad aperiam qui illum, deleniti laboriosam eum minima accusamus
                quo ea facere rem aut, amet consectetur! Architecto, cupiditate
                nemo impedit harum tenetur quod quae pariatur soluta dolorum ea
                eius consectetur sed praesentium tempore neque. Nulla magni
                excepturi saepe necessitatibus fugiat ab a. Sapiente molestiae
                dolore harum! Dignissimos, rerum. Illo et soluta adipisci dolor.
                Eum accusamus fugiat tempore obcaecati voluptates vel in
                doloremque velit explicabo saepe dicta quo eveniet vero natus,
                fuga et eius aperiam consequatur alias. Numquam eveniet natus
                sunt consectetur harum quas facere ipsam dignissimos ratione
                fugiat, magnam ut odio, a debitis recusandae sed provident, in
                quae officia iusto. Delectus optio cumque vero asperiores!
                Exercitationem? Ipsum repudiandae ex aliquam ratione esse eaque
                rerum! Sunt enim reiciendis voluptatem voluptatibus magni
                voluptates quisquam nemo, pariatur excepturi. Cupiditate est sit
                sed ad voluptatem? Doloremque, ratione dicta. Enim, dolore.
                Odit, iure beatae molestias optio velit consectetur! Possimus,
                incidunt maiores? Iusto ut ea reprehenderit ab adipisci
                voluptates natus, dicta, ex, voluptatum rem enim qui maiores
                laborum eius ad explicabo aperiam! Dignissimos blanditiis
                perferendis vel harum voluptatum, pariatur aspernatur nam
                voluptatem atque inventore animi commodi provident reiciendis
                perspiciatis vitae praesentium ratione molestias eum itaque!
                Nostrum voluptatibus, placeat mollitia recusandae impedit
                ratione? Sunt cum illo corporis culpa molestiae, reiciendis
                inventore consectetur commodi nemo, explicabo dolorem,
                consequuntur ipsam omnis possimus nesciunt saepe sequi ipsa
                libero similique rem odit perferendis aperiam? Nemo, corporis
                possimus. Eveniet quisquam officia laudantium ab. Ad totam
                molestias quam dicta corporis quaerat enim exercitationem
                corrupti nulla, nam dolor, modi expedita assumenda laborum?
                Commodi odit molestiae est officia, aliquid expedita cupiditate?
                Veniam eveniet alias quaerat ut iste, ratione nisi id, aut eum
                incidunt, mollitia vel voluptas pariatur error ea! Inventore ut
                vel consequuntur at sit sequi, libero, asperiores repellat unde
                voluptatum dolor minus dolorem exercitationem voluptate sunt
                totam qui similique modi saepe odio nemo obcaecati, non
                repellendus? Adipisci, quis. At iste labore natus ipsum, veniam
                qui saepe. Ratione placeat similique molestiae tempore iure
                dolores saepe praesentium libero accusantium et molestias iste,
                doloremque odit blanditiis velit animi adipisci nemo culpa.
                Veritatis est culpa aperiam ipsa, magnam ut pariatur ex labore
                unde nulla! Soluta possimus tenetur harum quod, voluptas
                explicabo? Placeat distinctio reprehenderit omnis nisi maiores
                tempora ab facere eligendi veniam. Molestiae, veritatis? Autem
                voluptates porro repudiandae ducimus nihil atque doloribus
                explicabo rem neque. Aliquam itaque aspernatur eaque dolore
                totam. Eos doloribus fuga dolorem mollitia, odit sunt dolorum
                ad. Earum, tempora? Deserunt dignissimos vero, sed sunt quasi
                aliquam nihil magnam nam debitis. Ullam dolorum illo facilis,
                necessitatibus magni ratione aliquam natus sunt, qui nesciunt
                hic. Consequatur commodi officiis ipsa qui aliquid! Facilis
                veniam quae dolor numquam ipsum similique, nisi quas eius hic,
                incidunt explicabo laborum expedita nam magnam inventore dolore
                alias? Quae laudantium ex libero rerum asperiores praesentium
                commodi saepe suscipit! Tempore quae esse sint aliquam! Eveniet,
                debitis aliquam. Velit dolorem, magnam odio, porro maiores est
                eos omnis in nihil, sequi expedita cum doloremque hic iste
                debitis vel veniam fuga laborum? Error, provident vitae! Nihil
                laudantium et atque dignissimos voluptatum. Distinctio adipisci
                quia aut nam ducimus sunt nesciunt, cumque perferendis alias
                error consequatur dolorem tenetur amet facilis nisi ipsam, in
                debitis. Ipsam consectetur ex accusamus cumque esse nam id in?
                Minus, obcaecati iste aut ullam possimus laudantium fugit
                repudiandae distinctio enim quaerat deleniti, ipsum quae
                laboriosam eum, adipisci ea! Eos, error. Molestias, nemo? Dolore
                impedit omnis ratione illo! Quis aperiam nam at dolorem error.
                Ea iusto, aperiam expedita neque commodi ratione aspernatur
                quidem officiis nobis natus id earum reprehenderit architecto
                distinctio. A iusto ullam quasi molestias illum quia ipsam
                fugiat molestiae, numquam, commodi ab nam fuga in, maiores
                repellat dolor eaque necessitatibus obcaecati dolorum veritatis.
                Voluptatem ex porro est asperiores fuga. Expedita molestiae
                nihil ipsam distinctio voluptatem, iusto dicta, dignissimos
                consequatur quaerat sunt tenetur, culpa soluta ab repellendus
                ipsa tempore! Delectus magni, voluptates autem quisquam
                voluptatem at aspernatur dicta quibusdam libero. Explicabo vero
                numquam magni eligendi saepe suscipit labore, quaerat cumque,
                accusamus, totam in a iusto sit. Aut quaerat adipisci recusandae
                doloribus, iste tenetur repellat. Tenetur maxime non velit ea
                corporis. Doloribus quidem ipsum saepe rem, beatae facilis quae
                eum. Aliquam sit eos aut cupiditate laborum iste, distinctio
                itaque aspernatur corporis voluptas, corrupti ipsa quis numquam
                totam suscipit quidem. Facere, veritatis. Officia culpa quia
                rerum a laborum. Sequi deserunt, autem illum expedita sapiente
                ipsum quod. Ullam, aliquam adipisci accusantium voluptate
                accusamus dignissimos est, eius dolore vero, provident aut
                recusandae quisquam nostrum.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <div className="flex flex-row">
          Image Container on left
          <div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          Product details on right
          <div>
            <div>
              <p>Desc and title</p>
              <div>
                <div>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                </div>
                <div>No.of rating and reviews</div>
              </div>
              <div>
                <span>price</span>
                <span>
                  <s>old price</s>
                </span>
                <span>discount</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default SingleProduct;
