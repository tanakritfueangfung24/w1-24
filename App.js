import { View, Text, Image, ScrollView } from 'react-native'

export default function App() {
  return (
    <ScrollView>
      {/* ส่วนโปรไฟล์ */}
      {/* วาง "รูปโปรไฟล์" และ "ข้อมูลตัวเลข" ไว้ข้างกันในแนวนอน */}
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Image style={{ width: 100, height: 100, borderRadius: 50, margin: 20 }} source={{ uri: "https://images.squarespace-cdn.com/content/v1/6670add926f2a64cd00fb0e7/80d782d8-d448-4ef0-9439-9f5a2783a7f4/Chii+button.png" }} />

        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>chiikawa</Text>
          <Text><Text style={{ fontWeight: "600" }}>13</Text> posts <Text style={{ fontWeight: "600" }}>200K</Text> follwers <Text style={{ fontWeight: "600" }}>14</Text> follwings </Text>
        </View>
      </View>

      {/* ไฮไลต์   ปัดซ้าย-ขวา         ซ่อนแถบเลื่อน                                       เพื่อเว้นระยะห่าง*/} 
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:15}}>

        <View>
          <Image source={require("./assets/chiikawa.jpg")}
          style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray" }}/>
          <Text style={{textAlign:"center"}}>Hachiware 🍫</Text>
        </View>

        <View>
          <Image source={require("./assets/chiikawa14.jpg")}
          style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray" }}/>
          <Text style={{textAlign:"center"}}>Chiikawa</Text>
        </View>

        <View>
          <Image source={require("./assets/chiikawa12.jpg")}
          style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray" }}/>
          <Text style={{textAlign:"center"}}>Usagi</Text>
        </View>

        <View>
          <Image source={require("./assets/chiikawa11.jpg")}
          style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray" }}/>
          <Text style={{textAlign:"center"}}>Hachiware</Text>
        </View>

        <View>
          <Image source={require("./assets/chiikawa13.jpg")}
          style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray" }}/>
          <Text style={{textAlign:"center"}}>Momonga</Text>
        </View>

        <View>
          <Image source={require("./assets/chiikawa16.jpg")}
          style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray" }}/>
          <Text style={{textAlign:"center"}}>Kuri-manju</Text>
        </View>

        <View>
          <Image source={require("./assets/chiikawa15.jpg")}
          style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray" }}/>
          <Text style={{textAlign:"center"}}>Rakko</Text>
        </View>

        <View>
          <Image source={require("./assets/chiikawa17.jpg")}
          style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray" }}/>
          <Text style={{textAlign:"center"}}>Chisa</Text>
        </View>

        <View>
          <Image source={require("./assets/chiikawa18.jpg")}
          style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray" }}/>
          <Text style={{textAlign:"center"}}>kani</Text>
        </View>

      </ScrollView>

      {/* โพสต์       แนวนอน              ขึ้นแถวใหม่         เว้น        ขยับด้านบน*/}  
      <View style={{flexDirection:"row", flexWrap:"wrap", gap: 5, marginTop:20}}>
        <Image source={require("./assets/banner4.gif")} style={{width:"32%", height:200}} />
        <Image source={require("./assets/banner2.gif")} style={{width:"32%", height:200}} />
        <Image source={require("./assets/banner.gif")} style={{width:"32%", height:200}} />
        <Image source={require("./assets/banner3.gif")} style={{width:"32%", height:200}} />
        <Image source={require("./assets/banner5.gif")} style={{width:"32%", height:200}} />
        <Image source={require("./assets/banner6.gif")} style={{width:"32%", height:200}} />
        <Image source={require("./assets/chiikawa8.jpg")} style={{width:"32%", height:200}} />
        <Image source={require("./assets/chiikawa9.jpg")} style={{width:"32%", height:200}} />
        <Image source={require("./assets/chiikawa10.jpg")} style={{width:"32%", height:200}} />
        <Image source={require("./assets/chiikawa19.jpg")} style={{width:"32%", height:200}} />
        <Image source={require("./assets/chiikawa20.jpg")} style={{width:"32%", height:200}} />
        <Image source={require("./assets/chiikawa21.jpg")} style={{width:"32%", height:200}} />
        <Image source={require("./assets/chiikawa22.jpg")} style={{width:"32%", height:200}} />
      </View>


    </ScrollView>
  )
}