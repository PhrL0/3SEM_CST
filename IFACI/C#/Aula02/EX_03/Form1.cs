using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace EX_03
{
    public partial class Imagem : Form
    {
        public Imagem()
        {
            InitializeComponent();
            pictureBox1.Image = Image.FromFile("c:\\Imagens\\liga.bmp");
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
        }

        private void Imagem_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            pictureBox1.Image = Image.FromFile("C:\\Imagens\\desliga.bmp");
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            pictureBox1.Image = Image.FromFile("c:\\Imagens\\liga.bmp");
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
        }
    }
}
