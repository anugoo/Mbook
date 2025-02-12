
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  useWindowDimensions,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
 
  Animated,
} from "react-native";


import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
import { RollInRight } from "react-native-reanimated";
const { width, height } = Dimensions.get('window');
const [scrollX, setScrollX] = useState(new Animated.Value(0));
const HEADER_HEIGHT = 95; 
const Header = () => (
  <View style={styles.header}>
    <View>
      <Text style={styles.logo}> MBook</Text>
    </View>
    <View style={styles.headerIcons}>
      {/* <AntDesign name="qrcode" size={15} color="white" />
      <AntDesign name="user" size={15} color="white" /> */}
      <AntDesign name="bells" size={20} color="white" style={{ marginLeft: 15 }} />
      <AntDesign name="user" size={20} color="white" style={{ marginLeft: 15 }} />
    </View>
  </View>
);
const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "white" }}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ height: 150 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            //justifyContent: "space-around",
            flexDirection: "row",

            //height: 150,
            //borderWidth: 1,
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              style={styles.bannerContainer}
              source={{
                uri: "data:image/png;base64,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",
              }}
            />
          ))}
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800, marginLeft: 10 }}>Энэ сарын онцлох  </Text>
        <AntDesign name="star" size={18} color="gold" />
      </View>
      <View style={{ marginBottom: 10, marginLeft: 10 }}>
        <Text style={{ fontSize: 10 }}>Аудио ном</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        <ScrollView horizontal={true}>
          {Array.from({ length: 10 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://ub1.cdn.mplus.mn/r_md_h/images/publisher/square/67876452_394f5e_1.jpg",
                }}
              />

              <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
              <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
              <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        
            </View>
          ))}

        </ScrollView>
      </ScrollView>
      <View >

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <Text style={{ fontWeight: "800" }}>Зөвхөн MBook-ээс </Text>
            <FontAwesome name="headphones" size={18} color="gold" style={{ marginLeft: 5 }} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: "auto", marginRight: 20 }}>
            <Text style={{ fontSize: 15, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
        </View>
        <View style={{ marginBottom: 10, marginLeft: 10 }} >
          <Text style={{ fontSize: 10 }}>Аудио номууд </Text>
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
          }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/65cd9238_3d3d3d_1.jpg",
                }}
              />

              <Text style={{ fontSize: 10, color: "gray", marginLeft: 10 }}>Ш.Шажинбат</Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Элс цас /тэргүүн дэвтэр/ </Text>
              <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
              <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
            </View>
          ))}

        </ScrollView>
      </View>

      <View style={{ marginTop: 10 }}>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <Text style={{ fontWeight: "800" }}>Анх удаа ном сонсох гэж байна уу?</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: "auto", marginRight: 20 }}>
            <Text style={{ fontSize: 15, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
        </View>
        <View style={{ marginBottom: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 10 }}>Унших завгүй бол СОНСООД үз </Text>
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
          }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/660a22be_555162_1.jpg",
                }}
              />

              <Text style={{ fontSize: 10, color: "gray", marginLeft: 10 }}>НОЖО Палишинг</Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Аянгат цагийн тууж </Text>
              <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
              <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
            </View>
          ))}

        </ScrollView>
      </View>

      <View >

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ flexDirection: "row", marginLeft: 10, }}>
            <Text style={{ fontWeight: "800" }}>Багц номнууд</Text>
            <AntDesign name="book" size={18} color="gold" style={{ marginLeft: 5 }} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: "auto", marginRight: 20, marginBottom: 10 }}>
            <Text style={{ fontSize: 15, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
          }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/bundles/65641b1a_ceab94_1.jpg",
                }}
              />
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Кихот ноён I , II </Text>
              <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
              <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
            </View>
          ))}


        </ScrollView>
      </View>

      <View style={{ marginTop: 30 }}>
        {/* ImageBackground to display the background image */}
        <ImageBackground
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          style={{
            flex: 1,
            width: width * 1.0, // 100% of screen width
            height: 210,
          }}
        >
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Text style={{ fontWeight: "800", color: "white" }}>Credit books </Text>
              <FontAwesome name="star" size={15} color="gold" style={{ marginLeft: 5 }} />
            </View>
            <View style={{ marginBottom: 10, marginLeft: 10 }} >
              <Text style={{ fontSize: 10, color: "white" }}>Subscription үйлчилгээг идэвхжүүлээд доорх </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 10, color: "white" }}>номнуудаас 1-г сонгон сонсоорой  </Text>
                <FontAwesome name="headphones" size={15} color="silver" style={{ marginLeft: 5 }} />
              </View>
            </View>
          </View>


          {/* ScrollView to show items horizontally */}
          <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              flexDirection: "row",

            }}>

            {Array.from({ length: 10 }).map((_, index) => (
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/60d15ca8_558f96_1.jpg",
                  }}
                />
                <Text style={{ fontSize: 10, color: "gray", marginLeft: 10 }}>Херманн Хессе</Text>
                <Text style={{ fontSize: 10, marginLeft: 10 }}>Сиддхарта</Text>
                <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
              <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
              </View>
            ))}

          </ScrollView>
        </ImageBackground>
      </View>

      <View style={{  marginTop: 20 }} >

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <Text style={{ fontWeight: "800" }}>Заавал сонсох 10 ном </Text>
            <FontAwesome name="headphones" size={18} color="silver" style={{ marginLeft: 5 }} />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10, marginLeft: 10 }} >
          <Text style={{ fontSize: 10 }}>Subscription/Credit эрхээрээ аваарай </Text>
          <AntDesign name="star" size={12} color="gold" />
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
          }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/6639a806_676f6d_1.jpg",
                }}
              />
              <Text style={{ fontSize: 10, color: "gray", marginLeft: 10 }}> Антуан де Сент-Экзюпери</Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Бяцхан хунтайж</Text>
              <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
              <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
            </View>
          ))}


        </ScrollView>
      </View>

      <View style={{ marginTop: 30 }}>
        {/* ImageBackground to display the background image */}
        <ImageBackground
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          style={{
            flex: 1,
            width: width, // 100% of screen width
            height: 210,
          }}
        >
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <Text style={{ fontWeight: "800", color: "white" }}>Burii-н санал болгох </Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: "auto", marginRight: 20 }}>
                <Text style={{ fontSize: 15, color: "blue" }}>Бүгд </Text>
                <AntDesign name="right" size={18} color="blue" />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10, marginBottom: 10 }}>
              <Text style={{ fontWeight: "800", color: "white" }}>номууд </Text>
            </View>
          </View>


          {/* ScrollView to show items horizontally */}
          <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              flexDirection: "row",

            }}>

            {Array.from({ length: 10 }).map((_, index) => (
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/655ec2f1_e5c2c2_1.002.jpg",
                  }}
                />
                <Text style={{ fontSize: 10, color: "gray", marginLeft: 10 }}>Л.Энхзул</Text>
                <Text style={{ fontSize: 10, color: "white", marginLeft: 10 }}>Сахар</Text>
                <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
              <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
              </View>
            ))}
            
          </ScrollView>
        </ImageBackground>
      </View>


      <View style={{ marginTop: 10 }}>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <Text style={{ fontWeight: "800" }}>+10 цагийн бүтээлүүд</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: "auto", marginRight: 20 }}>
            <Text style={{ fontSize: 15, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
        </View>
        <View style={{ marginBottom: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 10 }}>Аудио ном </Text>
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
          }}>
          {Array.from({ length: 10 }).map((_, index) => (
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/63a00a69_267376_1.jpg",
                  }}
                />
                <Text style={{ fontSize: 10, color: "gray", marginLeft: 10 }}>Л. Түдэв</Text>
                <Text style={{ fontSize: 10, color: "white", marginLeft: 10 }}>Уулын үер</Text>
                <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
              <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
              </View>
            ))}
         
          

        </ScrollView>
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }} >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: 800, marginLeft: 10 }}>2024 Бестселлер </Text>
          <AntDesign name="star" size={18} color="gold" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: "auto", marginRight: 20 }}>
          <Text style={{ fontSize: 15, color: "blue" }}>Бүгд </Text>
          <AntDesign name="right" size={18} color="blue" />
        </View>
      </View>
      <View style={{ marginBottom: 10, marginLeft: 10 }}>
        <Text style={{ fontSize: 10 }}>Аудио ном</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        <ScrollView horizontal={true}>

        {Array.from({ length: 10 }).map((_, index) => (
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/66e113a1_69432d_1.jpg",
                  }}
                />
                <Text style={{ fontSize: 10, color: "gray", marginLeft: 10 }}>И.Гэрэлчулуун</Text>
                <Text style={{ fontSize: 10, color: "white", marginLeft: 10 }}>Улаан басган</Text>
                <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
              <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
              </View>
            ))}
          
        </ScrollView>
      </ScrollView>



      <View style={{ marginTop: 10 }}>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <Text style={{ fontWeight: "800" }}>-5 цагийн бүтээлүүд</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: "auto", marginRight: 20 }}>
            <Text style={{ fontSize: 15, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
        </View>
        <View style={{ marginBottom: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 10 }}>Аудио ном </Text>
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
          }}>
          {Array.from({ length: 10 }).map((_, index) => (
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/65a8d8f0_b4cbdc_1.jpg",
                  }}
                />
                <Text style={{ fontSize: 10, color: "gray", marginLeft: 10 }}>Ц.Ууганбаяр</Text>
                <Text style={{ fontSize: 10, color: "white", marginLeft: 10 }}>Өдрийн зүүд</Text>
                <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
              <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
              </View>
            ))}
          


        </ScrollView>
      </View>

      <View >

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ flexDirection: "row", marginLeft: 10, }}>
            <Text style={{ fontWeight: "800" }}>Үнэгүй аудио номууд</Text>
            <AntDesign name="book" size={18} color="gold" style={{ marginLeft: 5 }} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: "auto", marginRight: 20, marginBottom: 10 }}>
            <Text style={{ fontSize: 15, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
          }}>
          {Array.from({ length: 10 }).map((_, index) => (
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publication/square-cover/1950/ALcBEDuF.jpg",
                  }}
                />
                <Text style={{ fontSize: 10, color: "gray", marginLeft: 10 }}>Ч.Ганжавхлан</Text>
                <Text style={{ fontSize: 10, color: "white", marginLeft: 10 }}>Автуус ба амьдрал</Text>
                <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
              <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
              </View>
            ))}
          


        </ScrollView>
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }} >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: 800, marginLeft: 10 }}>Зохиолчид  </Text>
          <AntDesign name="edit" size={18} color="gold" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: "auto", marginRight: 20 }}>
          <Text style={{ fontSize: 15, color: "blue" }}>Бүгд </Text>
          <AntDesign name="right" size={18} color="blue" />
        </View>
      </View>
      <View style={{ marginBottom: 10, marginLeft: 10 }}>
        <Text style={{ fontSize: 10 }}>Аудио ном</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        <ScrollView horizontal={true}>
        {Array.from({ length: 10 }).map((_, index) => (
          <View>
            <Image
              style={styles.roundContainer}
              source={{
                uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/author/square/66f11513_3b2c26_1.jpg",
              }}
            />
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Э.Дөлгөөн</Text>
          </View>
            ))}
          
        </ScrollView>
      </ScrollView>


      <View style={{ flexDirection: "row", marginTop: 20 }} >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: 800, marginLeft: 10 }}>Эрхлэн гаргагч,хэвлэлийн  </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: "auto", marginRight: 20 }}>
          <Text style={{ fontSize: 15, color: "blue" }}>Бүгд </Text>
          <AntDesign name="right" size={18} color="blue" />
        </View>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 10, marginLeft: 10 }}>
        <Text style={{ fontWeight: 800, fontSize: 15 }}>газрууд  </Text>
        <AntDesign name="book" size={18} color="gold" />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        <ScrollView horizontal={true}>

        {Array.from({ length: 10 }).map((_, index) => (
          <View>
            <Image
              style={styles.roundContainer}
              source={{
                uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/newsfeed/item/publishers/cover/66df99a1_79c89b_1.jpg",
              }}
            />
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Pub Publishing</Text>
          </View>
            ))}
         


        </ScrollView>
      </ScrollView>

      <View style={{ marginTop: 10 }}>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <Text style={{ fontWeight: "800" }}>Mbook номын клуб-с санал</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: "auto", marginRight: 20 }}>
            <Text style={{ fontSize: 15, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Text style={{ fontWeight: "800" }}>болгох нь </Text>
        </View>
        <View style={{ marginBottom: 10, marginTop: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 10 }}>Бидний сонссон номууд...</Text>
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
          }}>
           {Array.from({ length: 10 }).map((_, index) => (
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/623d6ba4_b38e4e_1.jpg",
                  }}
                />
                <Text style={{ fontSize: 10, color: "gray", marginLeft: 10 }}>Дон Мигель Руис</Text>
                <Text style={{ fontSize: 10, color: "white", marginLeft: 10 }}>Дөрвөн хэлцэл</Text>
                <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
              <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
              </View>
            ))}

        </ScrollView>
      </View>






    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}></View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);


const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
 
});


export default function index() {
  const layout = useWindowDimensions();
  const [index, setIndex] =useState(0);
  const routes = [
    { key: "first", title: "Танд зориулсан" },
    { key: "second", title: "Аудио ном" },
    { key: "third", title: "Цахим ном" },
  ];

  return (
    <SafeAreaView style={styles.container}>
    <Header />
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          scrollEnabled={true}
          style={{ backgroundColor: 'white' }}
          activeColor="blue"  
          inactiveColor="black" 
          indicatorStyle={{
            backgroundColor: 'blue', 
            height: 3,                
          }}
          
        />
      )}
    />
    <Text>HELLO WORLD</Text>
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  tabView: {
    backgroundColor: "black",
  },
  tabBar: {
    backgroundColor: "white",
  },
  indicator: {
    backgroundColor: "red",
  },
  labelStyle: {
    fontSize: 14,
    color: "black", 
  },
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  scene: {
    flex: 1,
    backgroundColor: 'white',
  },
  minuscircle: {
    position: "absolute",
    top: 4,
    right: 15,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9, 
    shadowRadius: 4,
  },
  docum: {
    position: "absolute",
    top: 4,
    right: 43,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
  imgContainerWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imgContainer: {
    height: 120,
    width: 120,
    marginRight: 10,
    marginLeft: 10,
  },
  bannerContainer: {
    height: 100,
    width: 380,
    marginRight: 20,
    marginLeft: 20,
  },
  roundContainer: {
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 50, // Makes the container rounded
    overflow: 'hidden',
  }
});
