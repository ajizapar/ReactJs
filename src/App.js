import React, {useState, useEffect} from 'react';
import './App.css';

function App(){

    const [name, setName]=useState("");
    const [gender, setGender]=useState("");
    const [birth, setBirth]=useState("");
    const [religion, setReligion]=useState("");
    const [message, setMessage]=useState("");
    const [list, setList]=useState([]);

    const [ngoding, setNgoding]=useState("");
    const [rebahan, setRebahan]=useState("");
    const [melamun, setMelamun]=useState("");
    const [bacabuku, setBacaBuku]=useState("");
    const [nontonyt, setNonton]=useState("");
    const [dengerinlagu, setLagu]=useState("");
    const [other, setOther]=useState("");
    

    const handleSubmit = (e) => {
      e.preventDefault();
      const temp=[]
      const data = {name, religion, message, birth, gender, ngoding, rebahan, melamun, bacabuku, nontonyt, dengerinlagu, other}
      temp.push(ngoding)
      temp.push(rebahan)
      temp.push(melamun)
      temp.push(bacabuku)
      temp.push(nontonyt)
      temp.push(dengerinlagu)
      temp.push(other)
      data.interest = temp
      
      if (data) {
        setList((ls)=>[...ls, data])
        setName("")
        setGender("")
        setBirth("")
        setReligion("")
        setMessage("")
      }
    }

    return (
      <div className="App">
        <center><h1>Biodata</h1></center>
         <div id="form">
          <form onSubmit={handleSubmit}>
            <li>
                <label htmlFor="name">Nama Lengkap</label><br/>
                <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} autoFocus/>
            </li>
            <li>
                <label htmlFor="born">Tanggal Lahir</label><br/>
                <input type="date" name="born" value={birth} onChange={(e)=>setBirth(e.target.value)} id="born"/>
            </li>

            <li>
                <label htmlFor="sex">Jenis Kelamin</label><br/>
                <div className="option" value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <input type="radio" name="sex" id="sex1" value="Laki-laki" />
                    <label htmlFor="sex1">Laki-laki</label>
                    <input type="radio" name="sex" id="sex2" value="Perempuan" />
                    <label htmlFor="sex2">Perempuan</label>
                    <input type="radio" name="sex" id="sex3" value="Other" />
                    <label htmlFor="sex3">Other</label>
                </div>
            </li>
            <li>
                <label htmlFor="interest">Hobi</label><br/>
                <div className="option">
                    <input type="checkbox" onChange={(e)=>setNgoding(e.target.value)} value="Ngoding"/>
                    <label>Ngoding</label>

                    <input type="checkbox"  onChange={(e)=>setRebahan(e.target.value)} value="Rebahan"/>
                    <label>Rebahan</label>

                    <input type="checkbox" onChange={(e)=>setMelamun(e.target.value)} value="Melamun"/>
                    <label >Melamun</label>

                    <input type="checkbox"  onChange={(e)=>setBacaBuku(e.target.value)} value="Baca Buku"/>
                    <label >Baca Buku</label>

                    <input type="checkbox"  onChange={(e)=>setNonton(e.target.value)} value="Nonton Youtube"/>
                    <label >Nonton Youtube</label>

                    <input type="checkbox"  onChange={(e)=>setLagu(e.target.value)} value="Dengerin Lagu"/>
                    <label >Dengerin Lagu</label>

                    <input type="checkbox"  onChange={(e)=>setOther(e.target.value)} value="Other"/>
                    <label >Other</label>
                </div>
            </li>
            <li>
                <label htmlFor="religion">Agama</label><br/>
                <input type="text" name="religion" value={religion} onChange={(e)=>setReligion(e.target.value)} id="religion"/>
            </li>
            <li>
                <label htmlFor="message">Pesan</label><br/>
                <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)} id="message" cols="30" rows="10"></textarea>
            </li>
            <center><input type="submit" value="Submit" /></center>
          </form>
        </div>

        {
          list.map((a)=>
            <div>
              <table className='table'>
                <tr>
                  <th>Label</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>Nama</td>
                  <td>{a.name}</td>
                </tr>
                <tr>
                  <td>Tanggal Lahir</td>
                  <td>{a.birth}</td>
                </tr>
                <tr>
                  <td>Jenis Kelamin</td>
                  <td>{a.gender}</td>
                </tr>
                <tr>
                  <td>Hobi</td>
                  <td>
                  {
                    a.interest
                  }
                  </td>
                </tr>
                <tr>
                  <td>Agama</td>
                  <td>{a.religion}</td>
                </tr>
                <tr>
                  <td>Pesan</td>
                  <td>{a.message}</td>
                </tr>

              </table>
            </div>
          )
        }
      </div>
    );
  }

export default App;
