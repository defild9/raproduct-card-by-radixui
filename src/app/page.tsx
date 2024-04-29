import Image from "next/image";
import { Container, Flex, Button, Link, Strong, Box } from "@radix-ui/themes";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  StarFilledIcon,
  HeartIcon
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24">
      <Container>
        <Flex direction="row" justify="between">
          <div className="photo">
            <Flex direction="row" gap="4" justify="between" align="stretch">
              <Flex direction="column" gap="2">
                <Image
                  className="rounded shadow-md"
                  src="/image.png"
                  alt="Thumbnail 1"
                  height={70}
                  width={70}
                />
                <Image
                  className="rounded shadow-md"
                  src="/image2.png"
                  alt="Thumbnail 2"
                  height={70}
                  width={70}
                />
                <Image
                  className="rounded shadow-md"
                  src="/image3.png"
                  alt="Thumbnail 3"
                  height={70}
                  width={70}
                />
              </Flex>

              <div
                className="large-image-container"
                style={{ position: "relative" }}
              >
                <Image
                  className="rounded shadow-lg"
                  src="/image-large.png"
                  alt="Large Image"
                  height={535}
                  width={670}
                />
                <Button
                  size="3"
                  radius="full"
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  <StarFilledIcon /> Highly Rated
                </Button>

                <Flex
                  direction="row"
                  gap="2"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                  }}
                >
                  <Button
                    size="3"
                    radius="full"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                    }}
                    className="bg-black text-white"
                  >
                    <ChevronLeftIcon />
                  </Button>
                  <Button
                    size="3"
                    radius="full"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                    }}
                    className="bg-black text-white"
                  >
                    <ChevronRightIcon />
                  </Button>
                </Flex>
              </div>
            </Flex>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Air Jordan 1 Retro High OG
            </h1>
            <p className="text-base font-bold text-gray-900 mb-4">
              Men&apos;s Shoes
            </p>
            <p className="text-lg font-bold text-gray-900 mb-4">$180</p>
            <div className="choise-model mb-7">
              <Flex direction="row" gap="1">
                <Image
                  className="rounded shadow-md"
                  src="/image.png"
                  alt="air force"
                  height={70}
                  width={70}
                />
                <Image
                  className="rounded shadow-md"
                  src="/image3.png"
                  alt="air force"
                  height={70}
                  width={70}
                />
                <Image
                  className="rounded shadow-md"
                  src="/image2.png"
                  alt="air force"
                  height={70}
                  width={70}
                />
              </Flex>
            </div>
            <div className="select-size mb-6">
              <Flex direction="row" justify="between">
                <h3>Select Size</h3>
                <h3>Size Guide</h3>
              </Flex>
              <Flex direction="column" gap="2">
                {Array.from({ length: 5 }, (_, i) => (
                  <Flex key={i} direction="row" gap="1" justify="between">
                    <Button size="4" radius="small" variant="outline">
                      M {3.5 + i} / W{5 + i}
                    </Button>
                    <Button size="4" radius="small" variant="outline">
                      M {3.5 + i} / W{5 + i}
                    </Button>
                  </Flex>
                ))}
              </Flex>
            </div>
            <div className="buy-section mb-6">
              <div>
                <p className="p-5 text-center w-80">
                  4 interest-free payments of $45.00 with{" "}
                  <Strong>Klarna.</Strong>{" "}
                  <Link href="#" underline="always">
                    Learn More
                  </Link>
                </p>
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    height: "55px",
                    width: "100%",
                    marginBottom: "0.75rem",
                  }}
                  radius="full"
                >
                  Add to bag
                </Button>
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "Black",
                    height: "55px",
                    width: "100%",
                    marginBottom: "0.75rem",
                    border: "1px solid black",
                  }}
                  radius="full"
                >
                  Favorite <HeartIcon />
                </Button>
                <p className="p-5 text-center w-80">
                  This product is excluded from site promotions and discounts.
                </p>
                <h4 className="font-semibold">Shipping</h4>
                <p className="mb-4">
                  You&apos;ll see our shipping options at checkout
                </p>
                <h4>Free Pickup</h4>
                <Link href="#" underline="always">
                  Find a Store
                </Link>
                <p className="w-80 mt-5 mb-5">
                  The Air Jordan 1 Retro High remakes the classic sneaker,
                  giving you a fresh look with a familiar feel. Premium
                  materials with new colors and textures give modern expression
                  to an all-time favorite.
                </p>
                <ul>
                  <li>Shown: White/Team Red</li>
                  <li>Style: DZ5485-160</li>
                </ul>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </main>
  );
}
